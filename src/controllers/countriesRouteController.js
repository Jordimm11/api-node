let countriesList = require('../../countriesList');

const get = (req, res) => {
  res.status(200);
  res.json(countriesList);
};

const post = (req, res) => {
  if (!req.body.name) {
    res.status(400);
    res.send('name is required!');
  } else {
    countriesList.push(req.body);
    res.status(201);
    res.json(req.body);
  }
};

const put = (req, res) => {
  if (!req.body.name) {
    res.status(400);
    res.send('error');
  } else {
    const indexCountry = countriesList.findIndex((country) => country.code === req.body.code);
    countriesList[indexCountry].name = req.body.name;
    res.status(200);
    res.json(req.body);
  }
};

const deleter = (req, res) => {
  if (!req.body.name) {
    res.status(400);
    res.send('error');
  } else {
    countriesList = countriesList.filter((country) => country.code !== req.body.code);
    res.status(200);
    res.json(req.body);
  }
};

module.exports = {
  get, post, put, deleter,
};
