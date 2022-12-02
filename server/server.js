require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Configuracion global de rutas
app.use(require('./users/routes/index'));
app.use(require('./placas/routes/index'));

let renderHTML = path.resolve(__dirname, '../public/index.html');

app.get('/', function (req, res) {
    res.sendFile(renderHTML);
});

mongoose.connect(process.env.URLDB, {}, (err) => {
    if (err) throw err;
    console.log("Base de datos online");
});

app.listen(process.env.PORT, ()=> {
    console.log("Escuchando en puerto 3000");
});