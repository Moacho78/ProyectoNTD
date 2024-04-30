const express = require("express");
const router = express.Router(); //manejador de rutas de express
const pedidosSchema = require("../models/pedidos");
//Nuevo producto en la gestión de pedidos
router.post("/pedidos", (req, res) => {
    const pedidos = pedidosSchema(req.body);
    pedidos
        .save() //guardar
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
//CONSULTAR TODOS LOS PRODUCTOS
router.get("/pedidos", (req, res) => {
    pedidosSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un producto por su nombre
router.get("/pedidos/:nombre", (req, res) => {
    const { nombre } = req.params;
    pedidosSchema
        .findById(nombre)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el estado de entrega del producto por su id 
router.put("/pedidos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, user, estado } = req.body;
    pedidosSchema
        .updateOne({ _id: id }, {
            $set: { nombre, user, estado }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar en caso de que el pedido haya sido cancelado
router.delete("/pedidos/:id", (req, res) => {
    const { id } = req.params;
    pedidosSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});