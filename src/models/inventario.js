const mongoose = require("mongoose"); // importando el componente mogoose
const inventarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    cantidadDisponible: {
        type: Number,
        required: true,
    }
});
module.exports = mongoose.model("inventario", inventarioSchema);