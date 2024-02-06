const {Schema, model}  = require ('mongoose');

const AnimalSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del animal obligatorio']
    },

    tipo: {
        type: String,
        required: [true, 'El tipo de animal que es, es obligatorio']
    },
    
    raza: {
        type: String,
        required: [true, 'La raza de animal es obligatoria']
    },

    estadoDelAnimal: {
        type: String,
        required: [true, 'Requerimos saber que estado se encuentra el animal']
    },

    img: {
        type: String
    },

    role: {
        type: String,
        required: true,
        enum: ["ADOPTADO_ROLE", "SINADOPTAR_ROLE"]
    },

    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Animal', AnimalSchema);