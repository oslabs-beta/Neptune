// const { data } = require('../../client/components/PieChart');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const queryURL = 'http://127.0.0.1:9090/api/v1/';
const queryController = {};

// Returning all queries for PROMQL
queryController.allQueries = async (req, res, next) => {
  try {
    const response = await fetch(`${queryURL}label/__name__/values`);
    data = await response.json();
    res.locals.allQueries = data.data;
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from allQueries in queryController',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from allQueries',
      },
    });
  }
};

// Memory in bytes for all namespaces, returned in object, key is name of namespace, value is an array with data
queryController.memoryAllNamespaces = async (req, res, next) => {
  let start = new Date();
  let end = new Date(start.getTime());
  end.setHours(end.getHours() - 24);
  let endDateTime = start.toISOString();
  let startDateTime = end.toISOString();
  const memoryCache = {};
  const query = `${queryURL}query_range?query=sum(container_memory_working_set_bytes) by (namespace)&start=${startDateTime}&end=${endDateTime}&step=30m`;
  try {
    const response = await fetch(query);
    data = await response.json();
    data.data.result.forEach((element) => {
      if (!memoryCache[element.metric.namespace]) {
        memoryCache[element.metric.namespace] = element.values;
      }
    });
    res.locals.memoryAllNamespaces = memoryCache;
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from memoryAllNamespaces in queryController',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from memoryAllNamespaces',
      },
    });
  }
};

// Memory in bytes for all pods, returned in object, key is name of namespace, value is an array with data
queryController.memoryAllPods = async (req, res, next) => {
  let start = new Date();
  let end = new Date(start.getTime());
  end.setHours(end.getHours() - 24);
  let endDateTime = start.toISOString();
  let startDateTime = end.toISOString();
  const memoryCache = {};
  const query = `${queryURL}query_range?query=sum(container_memory_working_set_bytes) by (pod)&start=${startDateTime}&end=${endDateTime}&step=30m`;
  try {
    const response = await fetch(query);
    data = await response.json();
    data.data.result.forEach((element) => {
      if (!memoryCache[element.metric.pod]) {
        memoryCache[element.metric.pod] = element.values;
      }
    });
    res.locals.memoryAllPods = memoryCache;
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from memoryAllPods in queryController',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from memoryAllPods',
      },
    });
  }
};

// Get cluster network utilization - Transmit
queryController.clusterNetRec = async (req, res, next) => {
  let start = new Date();
  let end = new Date(start.getTime());
  end.setHours(end.getHours() - 24);
  let endDateTime = start.toISOString();
  let startDateTime = end.toISOString();
  const memoryCache = {};
  const query = `${queryURL}query_range?query=sum(irate(container_network_receive_bytes_total[10m])) by (namespace)&start=${startDateTime}&end=${endDateTime}&step=30m`;
  try {
    const response = await fetch(query);
    data = await response.json();
    data.data.result.forEach((element) => {
      if (!memoryCache[element.metric.pod]) {
        memoryCache[element.metric.pod] = element.values;
      }
    });
    res.locals.clusterNetRec = memoryCache;
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from clusterNetRec in queryController',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from clusterNetRec',
      },
    });
  }
};

// Get cluster network utilization - Receive
queryController.clusterNetTrans = async (req, res, next) => {
  let start = new Date();
  let end = new Date(start.getTime());
  end.setHours(end.getHours() - 24);
  let endDateTime = start.toISOString();
  let startDateTime = end.toISOString();
  const memoryCache = {};
  const query = `${queryURL}query_range?query=sum(irate(container_network_transmit_bytes_total[10m])) by (namespace)&start=${startDateTime}&end=${endDateTime}&step=30m`;
  try {
    const response = await fetch(query);
    data = await response.json();
    data.data.result.forEach((element) => {
      if (!memoryCache[element.metric.pod]) {
        memoryCache[element.metric.pod] = element.values;
      }
    });
    res.locals.clusterNetTrans = memoryCache;
    return next();
  } catch (err) {
    return next({
      log: 'Error getting data from clusterNetTrans in queryController',
      status: 500,
      message: {
        err: 'An error happened trying to get the data from clusterNetTrans',
      },
    });
  }
};

module.exports = queryController;
