const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let placaSchema = new Schema({
    userId: {
        type: String,
        required: [true, 'No hay usuario asignado a la placa'],
    },
    numero: {
        type: String,
        unique: true,
        required: [true, "El numero de la placa es necesario"],
    }
    });


 placaSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})
module.exports = mongoose.model('Placa', placaSchema)