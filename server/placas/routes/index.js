const express = require('express')
const app = express()
app.use("placas", require('./main'));
module.exports = app;