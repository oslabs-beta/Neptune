import express from 'express';
import k8sController from '../controllers/controllers'


const k8sRouter = express.Router();

// GET 
k8sRouter.get('/node/:name',k8sController.getAllNodes , (req, res) => {
  res.status(200).json(res.locals.nodeList);
});

k8sRouter.get('/pod/:name',k8sController.getAllPods, (req, res) => {
  res.status(200).json(res.locals.podList);
});

k8sRouter.get('/namespace/:name',k8sController.getAllNamespaces , (req, res) => {
  res.status(200).json(res.locals.namespace);
});

module.exports = k8sRouter;