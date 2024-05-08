const mongoose = require("mongoose"); // importando el componente mogoose

const pedidosCompletados = mongoose.Schema({
    pedido: [{type:mongoose.Schema.Types.ObjectId,ref: 'pedidos' , required:true}],
    fecha: {
        type:Date,
        required:true
    }

});
module.exports = mongoose.model("pedidosCompletados", pedidosCompletados);