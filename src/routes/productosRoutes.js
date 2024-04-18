const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/producto");
//Nuevo animal
router.post("/productos", (req, res) => {
    const producto = productosSchema(req.body);
    animal
        .save() //guardar
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
//CONSULTAR TODOS LOS ANIMALES
router.get("/productos", (req, res) => {
    productosSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un animal por su id
router.get("/animals/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un animal por su id
router.put("/animals/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo, fecha } = req.body;
    animalSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipo, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un animal por su id

router.delete("/animals/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});


