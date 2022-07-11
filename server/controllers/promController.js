const queryURL = 'http://127.0.0.1:9090/api/v1/'

const promController = {};

promController.isUp = (req, res, next) => {
  fetch(`http://127.0.0.1:9090/`)
  .then(response => response.json())
  .then(data => {
    res.locals.promStatus = data;
    console.log(data);
  })
}

module.exports = promController;