const express = require('express');
const k8sRouter = express.Router();

const k8sController = require('../controllers/k8sClient');

// /api/k8s/"NEW END POINT HERE"
// ROUTE FOR PODS
k8sRouter.get('/pod', k8sController.getAllPods, (req, res) => {
  res.status(200).json(res.locals.podList);
});

// ROUTE FOR NODE LIST AND NODE STATUS
k8sRouter.get('/node', k8sController.getAllNodes, (req, res) => {
  res.status(200).json(res.locals.nodeList);
});

// ROUTE FOR NAMESPACES
k8sRouter.get('/namespace', k8sController.getAllNamespaces, (req, res) => {
  res.status(200).json(res.locals.namespace);
});

// ROUTE FOR DEPLOYMENTS
k8sRouter.get('/deployment', k8sController.getDeployment, (req, res) => {
  res.status(200).json(res.locals.deployment);
});

// ROUTE FOR SERVICES
k8sRouter.get('/services', k8sController.getService, (req, res) => {
  res.status(200).json(res.locals.service);
});

module.exports = k8sRouter;
