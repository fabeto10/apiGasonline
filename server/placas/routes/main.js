const express = require("express");
const controller = require("../controllers/main");
const app = express();

app.get("/", controller.getPlaca);
app.post("/", controller.setPlaca);
app.post("/grupo", controller.setGrupoPlacas); //AGREGAR MIDDLEWARE PARA ACCESO SOLO A ADMIN
app.get("/grupo", controller.getGrupoPlacas);

module.exports = app;