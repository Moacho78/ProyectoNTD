const mongoose = require("mongoose"); // importando el componente mogoose

const pedidos = mongoose.Schema({
    producto: [{type:mongoose.Schema.Types.ObjectId,ref: 'inventario' , required:true}],

    user: [{type:mongoose.Schema.Types.ObjectId,ref: 'user' , required:true}],
    
    estado: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("pedidos", pedidos);