const express = require('express')
const app = express()
app.use("users", require('./main'));
module.exports = app;