const mongoose = require("mongoose"); // importando el componente mogoose
const listaDeseo = mongoose.Schema({
    producto: [{ type: mongoose.Schema.Types.ObjectId,ref: 'inventario' , required:true}],
    user: [{type:mongoose.Schema.Types.ObjectId, ref: 'user' , required:true}]
   
});
module.exports = mongoose.model("listaDeseo", listaDeseo);