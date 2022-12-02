const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const controller = require('../controllers/main')
const app = express();

app.post('/login', controller.login);
app.post('/register', controller.register);

module.exports = app;