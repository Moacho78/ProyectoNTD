const mongoose = require("mongoose"); // importando el componente mogoose
const producto = require("./producto");
const user = require("./user");
const listaDeseo = mongoose.Schema({
    producto: {
        type: any,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
   
});
module.exports = mongoose.model("listaDeseo", productoSchemaSchema);