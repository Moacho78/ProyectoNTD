const express = require("express");
const router = express.Router(); //manejador de rutas de express
<<<<<<< HEAD
const productoSchema = require("../models/producto");
//Nuevo producto
router.post("/productos", (req, res) => {
    const producto = productoSchema(req.body);
    producto
        .save() //guardar
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
=======
const inventarioSchema = require("../models/inventario");

>>>>>>> 7a3ceb7a46bc866a5c925060384291cd53c8cb75
module.exports = router;
//CONSULTAR TODOS LOS PRODUCTOS
router.get("/productos", (req, res) => {
<<<<<<< HEAD
    productoSchema.find()
=======
    inventarioSchema.find()
>>>>>>> 7a3ceb7a46bc866a5c925060384291cd53c8cb75
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un producto por su nombre
router.get("/productos/:nombre", (req, res) => {
    const { nombre } = req.params;
<<<<<<< HEAD
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


=======
    inventarioSchema
        .findById(nombre)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
>>>>>>> 7a3ceb7a46bc866a5c925060384291cd53c8cb75
