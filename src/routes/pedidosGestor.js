const express = require("express");
const router = express.Router(); //manejador de rutas de express
const pedidosSchema = require("../models/pedidos");

module.exports = router;
//CONSULTAR TODOS LOS PRODUCTOS
router.get("/pedidos", (req, res) => {
    pedidosSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un producto por su nombre
router.get("/inventario/:nombre", (req, res) => {
    const { nombre } = req.params;
    inventarioSchema
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
