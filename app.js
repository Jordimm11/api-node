const express = require('express');
const debug = require('debug')('app');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('My server works...');
});

const countriesRouter = require('./src/routes/countriesRouter')();

app.use('/api/countries', countriesRouter);

app.listen(port, () => debug(`Running on port ${port}`));
