// kubectl port-forward prometheus-prometheus-kube-prometheus-prometheus-0 --namespace=default 9090:9090
const { response } = require('express');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const queryURL = 'http://127.0.0.1:9090/api/v1/';
const promController = {};

//----------CLUSTER----------//

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
    return next({
      log: 'Error getting data from promClusterCpuCore',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promClusterCpuCore',
      },
    });
  }
};

// CLUSTER - CPU USAGE
promController.promClusterCpuPct = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=1 - sum(avg by (mode) (rate(node_cpu_seconds_total{job="node-exporter", mode=~"idle|iowait|steal"}[10m])))`
    );
    data = await response.json();
    data = Number(data.data.result[0].value[1]) * 100;
    res.locals.promClusterCpuPct = data;
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from promClusterCpuPct',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promClusterCpuPct',
      },
    });
  }
};

// CLUSTER - TOTAL MEMORY
promController.promClusterMemoryTotal = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=sum(container_memory_working_set_bytes)`
    );
    data = await response.json();
    res.locals.promClusterMemoryTotal = data.data.result[0].value[1];
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from promClusterMemoryTotal',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promClusterMemoryTotal',
      },
    });
  }
};

// CLUSTER - MEMORY UTILIZATION
promController.promClusterMemoryUtil = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=node_memory_Active_bytes/node_memory_MemTotal_bytes`
    );
    data = await response.json();
    data = data.data.result[0].value[1] * 100;
    res.locals.promClusterMemoryUtil = data.toFixed(2);
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from promClusterMemoryUtil',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promClusterMemoryUtil',
      },
    });
  }
};

// CLUSTER - TOTAL MEMORY
promController.promClusterMemoryTotal = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=sum(container_memory_working_set_bytes)`
    );
    data = await response.json();
    res.locals.promClusterMemoryTotal = data.data.result[0].value[1];
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from promClusterMemoryTotal',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promClusterMemoryTotal',
      },
    });
  }
};

//----------NAMESPACES----------//

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
    return next({
      log: 'Error getting data from promNamespaces',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promNamespaces',
      },
    });
  }
};

//----------NODES----------//

// NODE - CPU usage
promController.promNodeCpu = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=(1 - sum by (instance)(increase(node_cpu_seconds_total{mode="idle"}[5m])) / sum by (instance)(increase(node_cpu_seconds_total[5m])))*100)`
    );
    res.locals.promNodeCpu = await response.json();
    res.locals.promNodeCpu = res.locals.promNodeCpu.data;
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from promNodeCpu',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promNodeCpu',
      },
    });
  }
};

// NODE - Return pod capacity of node as a number
promController.promNodePodCap = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=kube_node_status_capacity{resource="pods"}`
    );
    res.locals.promNodePodCap = await response.json();
    res.locals.promNodePodCap = parseInt(
      res.locals.promNodePodCap.data.result[0].value[1]
    );
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from promNodePodCap',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promNodePodCap',
      },
    });
  }
};

// NODE - Return network utilization
promController.promNodeNetUtil = async (req, res, next) => {
  try {
    const response = await fetch(
      `${queryURL}query?query=sum(rate(container_network_receive_bytes_total[5m]))`
    );
    data = await response.json();
    res.locals.promNodeNetUtil = data;
    res.locals.promNodeNetUtil = Number(data.data.result[0].value[1]);
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from promNodeNetUtil',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promNodeNetUtil',
      },
    });
  }
};

// NODE - Return network errors
promController.promNodeNetErr = async (req, res, next) => {
  try {
    const response1 = await fetch(
      `${queryURL}query?query=sum(node_network_receive_errs_total)`
    );
    const receiveErr = await response1.json();

    const response2 = await fetch(
      `${queryURL}query?query=sum(node_network_transmit_errs_total)`
    );
    const transmitErr = await response2.json();

    const networkErrors = Math.floor(
      (parseInt(receiveErr.data.result[0].value[1]) +
        parseInt(transmitErr.data.result[0].value[1])) /
        1024
    );

    res.locals.promNodeNetErr = networkErrors;

    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from promNodeNetErr',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promNodeNetErr',
      },
    });
  }
};

//----------ALERTS----------//

// ALERTS
promController.promAlerts = async (req, res, next) => {
  try {
    const response = await fetch(`${queryURL}alerts`);
    data = await response.json();
    res.locals.promAlerts = data.data.alerts;
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from promAlerts',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from promAlerts',
      },
    });
  }
};

module.exports = promController;
