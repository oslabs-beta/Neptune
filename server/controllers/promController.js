// kubectl port-forward prometheus-prometheus-kube-prometheus-prometheus-0 --namespace=default 9090:9090

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const queryURL = 'http://127.0.0.1:9090/api/v1/';

const promController = {};

// GETTING ALL THE NAMESPACES IN AN ARRAY
promController.promNamespaces = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=kube_namespace_created`
    );
    data = await response.json();
    const namespaces = [];
    data.data.result.forEach((element) => {
      namespaces.push(element.metric.namespace);
    });
    res.locals.promNamespaces = namespaces;
    return next();
  } catch (err) {
    return next(err);
  }
};

// promController.isUp = async (req, res, next) => {
//   const queryStr = `${queryURL}alerts`;
//   try {
//     const response = await fetch(queryStr);
//     res.locals.query = await response.json();
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// };

promController.isUp = (req, res, next) => {
  const queryStr = `${queryURL}query?query=up`;
  fetch(queryStr)
    .then((response) => response.json())
    .then((data) => {
      res.locals.query = data;
      console.log(data);
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

//CLUSTER - Total CPU Cores

promController.promClusterCpuCore = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=count without(cpu, mode) (node_cpu_seconds_total{mode="idle"})`
    );
    res.locals.promClusterCpuCore = await response.json();
    res.locals.promClusterCpuCore = parseInt(
      res.locals.promClusterCpuCore.data.result[0].value[1]
    );
    return next();
  } catch (err) {
    return next(err);
  }
};

// CLUSTER - Memory usage

promController.promClusterMemory = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=(1-sum(kube_node_status_allocatable{resource="memory", unit="byte"})/sum(kube_node_status_capacity{resource="memory", unit="byte"}))*100`
    );
    res.locals.promClusterMemory = await response.json();
    res.locals.promClusterMemory =
      res.locals.promClusterMemory.data.result[0].value[1];
    return next();
  } catch (err) {
    return next(err);
  }
};

// NODE - CPU usage
promController.promNodeCpu = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=(1 - sum by (instance)(increase(node_cpu_seconds_total{mode="idle"}[5m])) / sum by (instance)(increase(node_cpu_seconds_total[5m])))*100)`
    );
    res.locals.promNodeCpu = await response.json();
    res.locals.promNodeCpu = res.locals.promNodeCpu.data;
    console.log(res.locals.promNodeCpu);
    return next();
  } catch (err) {
    return next(err);
  }
};

// NODE - Memory usage
// NODE - Return all pods from a node
// NODE - Return pod capacity of node as a number
// NODE - Return network utilization
// NODE - Return network errors

// POD - Return pod info as an array of objects
// {name, node, namespace}

module.exports = promController;
