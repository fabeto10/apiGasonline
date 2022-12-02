require('./config/config');
require('express-async-errors')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const adminRouter = require('./admin/admin.router');

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());
app.use(bodyParser.json());
// Configuracion global de rutas
app.use(require('./users/routes/index'));
app.use(require('./placas/routes/index'));
app.use('/admin', adminRouter);

let renderHTML = path.resolve(__dirname, '../public/index.html');

app.get('/', (req, res) => res.send('Hello World!'))

const run = async () => {
    await mongoose.connect(process.env.URLDB, {}, (err) => {
        if (err) throw err;
        console.log("Base de datos online");
    });
    
    await app.listen(process.env.PORT, ()=> {
        console.log("Escuchando en puerto 3000");
    });
};

run();

