const express = require("express");
const router = express.Router(); //manejador de rutas de express
const inventarioSchema = require("../models/inventario");
//Nuevo producto
router.post("/inventario", (req, res) => {
    const inventario = inventarioSchema(req.body);
    inventario
        .save() //guardar
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//CONSULTAR TODOS LOS PRODUCTOS
router.get("/inventario", (req, res) => {
    inventarioSchema.find()
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

//Modificar un producto por su id 
router.put("/inventario/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion, cantidadDisponible } = req.body;
    inventarioSchema
        .updateOne({ _id: id }, {
            $set: { nombre,precio,descripcion,cantidadDisponible }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un producto por su id

router.delete("/inventario/:id", (req, res) => {
    const { id } = req.params;
    inventarioSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
module.exports = router;
