const express = require('express');
const k8sRouter = express.Router();
const k8sController = require('../controllers/k8sClient');
const promController = require('../controllers/promController');

// ROUTE FOR PODS
k8sRouter.get('/pod', k8sController.getAllPods, (req, res) => {
  return res.status(200).json(res.locals.podList.body.items.length);
});

// ROUTE FOR NODE LIST AND NODE STATUS
k8sRouter.get('/node', k8sController.getAllNodes, (req, res) => {
  return res.status(200).json(res.locals.nodeList);
});

k8sRouter.get('/nodeStatus', k8sController.getAllNodes, (req, res) => {
  return res.status(200).json(res.locals.nodeList.nodeStatus);
});

// ROUTE FOR NAMESPACES
k8sRouter.get('/namespace', k8sController.getAllNamespaces, (req, res) => {
  return res.status(200).json(res.locals.namespace.body.items.length);
});

// ROUTE FOR DEPLOYMENTS
k8sRouter.get('/deployment', k8sController.getDeployment, (req, res) => {
  return res.status(200).json(res.locals.deployment);
});

// ROUTE FOR SERVICES
k8sRouter.get('/services', k8sController.getService, (req, res) => {
  return res.status(200).json(res.locals.service);
});

/**
 * ************************************
 *
 * @module  promql-requests
 * @description contains our routes for our promethus fetch requests
 *
 * ************************************
 */
// Prometheus route handlers

// Prometheus status
k8sRouter.get('/promStatus', promController.isUp, (req, res) => {
  return res.status(200).json(res.locals.query);
});

// Prometheus cluster CPU usage
k8sRouter.get(
  '/promClusterCpuCore',
  promController.promClusterCpuCore,
  (req, res) => {
    return res.status(200).json(res.locals.promClusterCpuCore);
  }
);

// Prometheus cluster Memory usage
k8sRouter.get(
  '/promClusterMemory',
  promController.promClusterMemory,
  (req, res) => {
    return res.status(200).json(res.locals.promClusterMemory);
  }
);

// Prometheus node CPU usage
k8sRouter.get('/promNodeCpu', promController.promNodeCpu, (req, res) => {
  return res.status(200).json(res.locals.promNodeCpu);
});

module.exports = k8sRouter;
