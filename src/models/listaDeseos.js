const mongoose = require("mongoose"); // importando el componente mogoose
const listaDeseo = mongoose.Schema({
    producto: [{type:mongoose.Schema.Types.ObjectId,ref: 'inventario' , require:true}],
    user: [{type:mongoose.Schema.Types.ObjectId,ref: 'user' , require:true}]
   
});
module.exports = mongoose.model("listaDeseo", listaDeseoSchemaSchema);