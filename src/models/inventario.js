<<<<<<< HEAD:src/models/producto.js
const mongoose = require("mongoose"); // importando el componente mogoose
const productoSchema = mongoose.Schema({
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
    },
});
module.exports = mongoose.model("producto", productoSchema);
=======
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
>>>>>>> 7a3ceb7a46bc866a5c925060384291cd53c8cb75:src/models/inventario.js
