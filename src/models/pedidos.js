const mongoose = require("mongoose"); // importando el componente mogoose

const pedidos = mongoose.Schema({
    producto: [{type:mongoose.Schema.Types.ObjectId,ref: 'inventario' , require:true}],

    user: [{type:mongoose.Schema.Types.ObjectId,ref: 'user' , require:true}],
    
    estado: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("pedidos", pedidosSchemaSchema);