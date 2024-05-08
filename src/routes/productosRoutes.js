const express = require("express");
const router = express.Router(); //manejador de rutas de express

const productoSchema = require("../models/inventario");
//Nuevo producto
router.post("/productos", (req, res) => {
    const producto = productoSchema(req.body);
    producto
        .save() //guardar
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;
//CONSULTAR TODOS LOS PRODUCTOS
router.get("/productos", (req, res) => {

    productoSchema.find()

    inventarioSchema.find()

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

//Modificar un producto por su id 
router.put("/productos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo, fecha } = req.body;
    productoSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipo, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un animal por su id

router.delete("/productos/:id", (req, res) => {
    const { id } = req.params;
    productoSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
