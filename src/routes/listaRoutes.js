const express = require("express");
const router = express.Router(); //manejador de rutas de express
const listaDeseoSchema = require("../models/listaDeseos");
//Nuevo producto a la lista de deseos
router.post("/listaDeseos", (req, res) => {
    const producto = listaDeseoSchema(req.body);
    producto
        .save() //guardar
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
router.get("/listaDeseos/:nombre", (req, res) => {
    const { nombre } = req.params;
    listaDeseoSchema
        .findById(nombre)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un producto por su nombre
router.get("/listaDeseos/:nombre", (req, res) => {
    const { nombre } = req.params;

  listaDeseoSchema
        .findById(nombre)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/listaDeseos/:id", (req, res) => {
    const { id } = req.params;
    listaDeseoSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});