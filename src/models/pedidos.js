const mongoose = require("mongoose"); // importando el componente mogoose
const inventario = require("./inventario");
const user = require("./user");
const pedidos = mongoose.Schema({
    producto: {
        type: any,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("pedidos", pedidosSchemaSchema);