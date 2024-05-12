const express = require("express");
const router = express.Router(); //manejador de rutas de express
const inventarioSchema = require("../models/inventario");
//Nuevo producto
router.post("/inventario",async (req, res) => {
   const{codigo,nombre,precio,categoria,descripcion,cantidadDisponible}=req.body;
   const producto = new inventarioSchema({
    codigo:codigo,
    nombre:nombre,
    precio:precio,
    categoria:categoria,
    descripcion:descripcion,
    cantidadDisponible:cantidadDisponible
   });

   const consultarCodigo= await inventarioSchema.findOne({codigo: req.body.codigo});
   if(consultarCodigo) return res.status(400).json({ error: " El Producto ya se encuentra registrado" });
   await producto.save(); //save es un método de mongoose para guardar datos en MongoDB 
   // res.json(user);
   res.json({
       message: "Producto guardado en el inventario."
   });

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
