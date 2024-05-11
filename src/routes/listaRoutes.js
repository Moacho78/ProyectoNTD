
const express = require("express");
const router = express.Router(); //manejador de rutas de express
const listaDeseosSchema = require("../models/listaDeseos");
const userSchema=require("../models/user");
const inventario = require("../models/inventario");


//Nuevo producto en la gestión de pedidos

router.post("/listaDeseos", async (req, res) => {
    try {
        // Buscar el producto en el inventario por su código
        const productoConsulta = await inventario.findOne({ codigo: req.body.codigo });
        const userConsulta = await userSchema.findOne({correo: req.body.correo});

        if (productoConsulta) {
            if (userConsulta) {
                 // Si se encuentra el producto en el inventario, se procede a crear el pedido
            const nuevoProducto = new listaDeseosSchema({
                // Asignar los campos del pedido desde los datos recibidos en la solicitud
                // Puedes añadir más campos según lo necesites
                producto: productoConsulta._id, // Se guarda la referencia al producto encontrado
               user:userConsulta._id,
              

                // Otros campos del pedido...
            });

            // Guardar el nuevo pedido en la base de datos
            await nuevoProducto.save();

            res.json({
                message: "Producto guardado en lista de deseos",
                producto: nuevoProducto
            });
        } else {
            res.status(404).json({
                message: "Usuario no encontrado"
            });
        }
            } else {
                res.status(404).json({
                    message: "Producto no encontrado"
                }); 
            }
           
    } catch (error) {
        // Manejo de errores
        console.error("Error al procesar la solicitud:", error);
        res.status(500).json({
            message: "Ocurrió un error al procesar la solicitud"
        });
    }
});


 router.get("/listaDeseos/:userId", async (req, res) => {
    const { userId } = req.params;
 
    try {
       
       // Encuentra todos los pedidos asociados con el usuario dado
       const userLista = await listaDeseosSchema.findOne({ user: userId });
 
       // Verifica si el usuario tiene pedidos
       if (!userLista || userLista.length === 0) {
          return res.status(404).json({ message: "No se encontraron productos en la lista de deseos" });
       }
 
       res.status(200).json(userLista);
    } catch (error) {
       console.error("Error al obtener los pedidos del usuario:", error);
       res.status(500).json({ message: "Error al obtener los pedidos del usuario" });
    }
 });

 router.delete("/listaDeseos/:id" ,async(req,res)=> {
    const { id } = req.params;
    listaDeseosSchema
    .findByIdAndDelete(id)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        res.json({ message: error });
    });

 });
 
 module.exports = router;