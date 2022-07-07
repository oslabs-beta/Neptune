// k8s DASHBOARD
// import express from "express";
// K8s API 
const k8s = require('@kubernetes/client-node');

//New instance of k8s, (Kube config are the files that connect )
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api); // Queries services
const k8sApi2 = kc.makeApiClient(k8s.AppsV1Api); // Queries deployments

const metricsClient = new k8s.Metrics(kc);


k8sController = {};

k8sController.getAllPods = async (req,res,next) => {
    const {name} = req.params;
    
    try {
        const podsResult = await k8sApi.listNamespacedPod(name);
        res.locals.podList = podsResult;

        return next();

    } catch (err) {
        return next({
          log: 'Error getting data from getAllPods',
          status: 404,
          message: {
            err:'An error happened trying to get the data from getAllPods'
        },
        });
    }
}


k8sController.getAllNodes = async (req,res,next) => {
    const {name} = req.params;
    try {
        const nodeResult = await k8sApi.listNode(name);
        res.locals.nodeList = nodeResult.body;

        const nodeStatus = await k8sApi.listComponentStatus();
        res.locals.nodeList.nodeStatus = nodeStatus.body;

        return next();

    } catch (err) {
        return next({
          log: 'Error getting data from getAllNodes',
          status: 404,
          message: {
            err:'An error happened trying to get All Nodes'
        },
        });
    }
}


k8sController.getAllNamespaces = async (req,res,next) => {
    try {
        const namespaceResult = await k8sApi.listNamespacedPod();
        res.locals.namespace = namespaceResult;
        return next();

    } catch (err) {
        return next({
          log: 'Error getting data from getAllNamespaces',
          status: 404,
          message: {
            err:'An error happened trying to get the data from getAllNamespaces'
        },
        });
    }
}




module.exports = k8sController;