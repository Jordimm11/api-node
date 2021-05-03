const countriesList = require('../../countriesList');

const get = (req, res) => {
  const getCountry = countriesList.filter((country) => req.params.codeId === country.code);

  if (getCountry.length) {
    res.status(200);
    res.json(getCountry);
  } else {
    res.status(404);
    res.send('country code not found');
  }
};

module.exports = { get };
