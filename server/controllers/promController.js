// kubectl port-forward prometheus-prometheus-kube-prometheus-prometheus-0 --namespace=default 9090:9090

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const queryURL = 'http://127.0.0.1:9090/api/v1/';

const promController = {};

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

module.exports = promController;
