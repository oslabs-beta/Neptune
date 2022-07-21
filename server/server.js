// const exp = require('constants');
const express = require('express');
const path = require('path');
const cors = require('cors');
const k8sRouter = require('./routes/routes');

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../build')));

app.use('/api/k8s', k8sRouter);

app.get('/api', (req, res) => {
  return res.status(200).json('HELLO from Neptune BackEnd');
});

app.get('/', (req, res) => {
  return res.status(200).json('TESTING POSTMAN');
});

// Global route handler
app.use('*', (req, res) => {
  console.log('Page not found.');
  return res.status(404).send('404! Page not found.');
});

// Global error handler
app.use(defaultErrorHandler);
function defaultErrorHandler(err, req, res, next) {
  const defaultErr = {
    log: 'Global error handler',
    status: 500,
    message: {
      err: 'An error occurred, and this is the global error handler',
    },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
}

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
