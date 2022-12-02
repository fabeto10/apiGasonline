const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let placaSchema = new Schema({

    nombre: {
        type: String,
    },
    fecha: {
        type: String,
    }
    });


module.exports = mongoose.model('GrupoPlaca', placaSchema)