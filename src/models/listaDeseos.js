const mongoose = require("mongoose"); // importando el componente mogoose
const listaDeseo = mongoose.Schema({
    producto: {
        type: any,
        required: true,
    },
    user: {
        type: String,
        required: true,
    }
   
});
module.exports = mongoose.model("listaDeseo", listaDeseoSchemaSchema);