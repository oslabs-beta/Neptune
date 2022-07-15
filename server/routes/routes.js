const express = require('express');
const k8sRouter = express.Router();
const k8sController = require('../controllers/k8sClient');
const promController = require('../controllers/promController');

/////////////////////////////////////////////////////////////////////////////-------------------------------PODS-----------------------------////////////
/////////////////////////////////////////////////////////////////////////////

// ROUTE FOR PODS, PODNAMES, PODIPS
k8sRouter.get('/podCount', k8sController.getAllPods, (req, res) => {
  return res.status(200).json(res.locals.podCount);
});
k8sRouter.get('/podNames', k8sController.getAllPods, (req, res) => {
  return res.status(200).json(res.locals.podNames);
});
k8sRouter.get('/podIps', k8sController.getAllPods, (req, res) => {
  return res.status(200).json(res.locals.podIps);
});
k8sRouter.get('/podData', k8sController.getAllPods, (req, res) => {
  return res.status(200).json(res.locals.podData);
});

k8sRouter.get('/podInfo', k8sController.getAllPods, (req, res) => {
  return res.status(200).json(res.locals.info);
});

/////////////////////////////////////////////////////////////////////////////-------------------------------NODES-----------------------------////////////
/////////////////////////////////////////////////////////////////////////////

// ROUTE FOR NODE LIST AND NODE STATUS
// returns node count
k8sRouter.get('/node', k8sController.getAllNodes, (req, res) => {
  return res.status(200).json(res.locals.nodeList);
});

// returns node status
// k8sRouter.get('/nodeStatus', k8sController.getAllNodes, (req, res) => {
//   return res.status(200).json(res.locals.nodeList.nodeStatus);
// });

// returns node cpu usage
k8sRouter.get('/promNodeCpu', promController.promNodeCpu, (req, res) => {
  return res.status(200).json(res.locals.promNodeCpu);
});

// returns node memory usage
k8sRouter.get('/promNodeMemory', promController.promNodeMemory, (req, res) => {
  return res.status(200).json(res.locals.promNodeMemory);
});

// returns all pods from a node - SKIP?!?!?

// return pod capacity of node as a number
k8sRouter.get('/promNodePodCap', promController.promNodePodCap, (req, res) => {
  return res.status(200).json(res.locals.promNodePodCap);
});

// returns node network utilization
k8sRouter.get('/promNodeNetUtil', promController.promNodeNetUtil, (req, res) => {
  return res.status(200).json(res.locals.promNodeNetUtil);
});

// returns node network errors
k8sRouter.get('/promNodeNetErr', promController.promNodeNetErr, (req, res) => {
  return res.status(200).json(res.locals.promNodeNetErr);
});

/*
// returns all pods from a node
k8sRouter.get('/promNodePods', promController.promNodePods, (req, res) => {
  return res.status(200).json(res.locals.promNodePods);
});
*/




// return network errors
// k8sRouter.get(
//   {
//     /*INSERT HERE*/
//   },
//   {
//     /*INSERT HERE*/
//   },
//   (req, res) => {
//     return res.status(200).json({
//       /*INSERT HERE*/
//     });
//   }
// );

/////////////////////////////////////////////////////////////////////////////----------------------------NAMESPACES--------------------------////////////
/////////////////////////////////////////////////////////////////////////////

// ROUTE FOR NUMBER OF NAMESPACES
k8sRouter.get('/namespace', k8sController.getAllNamespaces, (req, res) => {
  return res.status(200).json(res.locals.namespace);
});
// ROUTE FOR NAMESPACES NAMES
k8sRouter.get('/namespaceNames', k8sController.getAllNamespaces, (req, res) => {
  return res.status(200).json(res.locals.namespaceNames);
});

/////////////////////////////////////////////////////////////////////////////----------------------------DEPLOYMENTS--------------------------////////////
/////////////////////////////////////////////////////////////////////////////

// ROUTE FOR DEPLOYMENTS
k8sRouter.get('/deployment', k8sController.getDeployment, (req, res) => {
  return res.status(200).json(res.locals.deployment);
});

/////////////////////////////////////////////////////////////////////////////----------------------------SERVICES--------------------------////////////
/////////////////////////////////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////////////////////
//---------PROMETHEUS ROUTE HANDLERS-----------////
/////////////////////////////////////////////////////////////////////////////

// TESTING NAMESPACES ******************** JIN
k8sRouter.get('/promNamespaces', promController.promNamespaces, (req, res) => {
  return res.status(200).json(res.locals.promNamespaces);
});

// Prometheus status
k8sRouter.get('/promStatus', promController.isUp, (req, res) => {
  return res.status(200).json(res.locals.query);
});
////////////////////////////////////////////////////////////////////////////
//---------PROMETHEUS CLUSTER -----------////
/////////////////////////////////////////////////////////////////////////////
// PROMETHEUS CPU CORES
k8sRouter.get(
  '/promClusterCpuCore',
  promController.promClusterCpuCore,
  (req, res) => {
    return res.status(200).json(res.locals.promClusterCpuCore);
  }
);

// PROMETHEUS CPU UTILIZATION
k8sRouter.get(
  '/promClusterCpuPct',
  promController.promClusterCpuPct,
  (req, res) => {
    return res.status(200).json(res.locals.promClusterCpuPct);
  }
);

// // PROMETHEUS CLUSTER MEMORY UTILIZATION
k8sRouter.get(
  '/promClusterMemoryUtil',
  promController.promClusterMemoryUtil,
  (req, res) => {
    return res.status(200).json(res.locals.promClusterMemoryUtil);
  }
);

// // PROMETHEUS CLUSTER MEMORY TOTAL
k8sRouter.get(
  '/promClusterMemoryTotal',
  promController.promClusterMemoryTotal,
  (req, res) => {
    return res.status(200).json(res.locals.promClusterMemoryTotal);
  }
);
////////////////////////////////////////////////////////////////////////////
//---------PROMETHEUS NODES -----------////
/////////////////////////////////////////////////////////////////////////////
// Prometheus node CPU usage
k8sRouter.get('/promNodeCpu', promController.promNodeCpu, (req, res) => {
  return res.status(200).json(res.locals.promNodeCpu);
});


k8sRouter.get('/promAlerts', promController.promAlerts, (req, res) => {
  return res.status(200).json(res.locals.promAlerts);
});

module.exports = k8sRouter;
