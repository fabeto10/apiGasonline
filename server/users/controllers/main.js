const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/user");

let mainController = {
  login: async (req, res) => {
    // here write code
    let body = req.body;
    Usuario.findOne({ email: body.email }, (erro, usuarioDB) => {
      if (erro) {
        return res.status(500).json({
          ok: false,
          err: erro,
        });
      }
      // Verifica que exista un usuario con el mail escrita por el usuario.
      if (!usuarioDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "Usuario o contraseña incorrectos",
          },
        });
      }
      // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
      if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "Usuario o contraseña incorrectos",
          },
        });
      }
      // Genera el token de autenticación
      let token = jwt.sign(
        {
          usuario: usuarioDB,
        },
        process.env.SEED_AUTENTICACION,
        {
          expiresIn: process.env.CADUCIDAD_TOKEN,
        }
      );
      res.json({
        ok: true,
        usuario: usuarioDB,
        token,
      });
    });
  },
  register: async (req, res) => {
    try {
      let body = req.body;
      let { nombre, email, password, role } = body;
      let usuario = new Usuario({
        nombre,
        email,
        password: bcrypt.hashSync(password, 10),
        role,
      });
      usuario.save((err, usuarioDB) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err,
          });
        }
        res.json({
          ok: true,
          usuario: usuarioDB,
        });
      });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
};

module.exports = mainController;
