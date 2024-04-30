const express = require("express");
const router = express.Router(); //manejador de rutas de express
const productoSchema = require("../models/inventario");

module.exports = router;
//CONSULTAR TODOS LOS PRODUCTOS
router.get("/productos", (req, res) => {
    productoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un producto por su nombre
router.get("/productos/:nombre", (req, res) => {
    const { nombre } = req.params;
    productoSchema
        .findById(nombre)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});