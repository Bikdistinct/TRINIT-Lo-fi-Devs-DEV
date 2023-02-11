const express = require('express');
const bodyParser = require('body-parser');
const cropAdvisor = require('./api/cropAdvisor');

const app = express();
app.use(bodyParser.json());

app.use('/api/cropAdvisor', cropAdvisor);

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});
