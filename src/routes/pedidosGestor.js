const express = require("express");
const router = express.Router(); //manejador de rutas de express
const pedidosSchema = require("../models/pedidos");
const userSchema=require("../models/user");
const inventario = require("../models/inventario");
const user = require("../models/user");

//Nuevo producto en la gestión de pedidos

router.post("/pedidos", async (req, res) => {
    try {
        // Buscar el producto en el inventario por su código
        const productoConsulta = await inventario.findOne({ codigo: req.body.codigo });
        const userConsulta = await userSchema.findOne({correo: req.body.correo});

        if (productoConsulta) {
            if (userConsulta) {
                 // Si se encuentra el producto en el inventario, se procede a crear el pedido
            const nuevoPedido = new pedidosSchema({
                // Asignar los campos del pedido desde los datos recibidos en la solicitud
                // Puedes añadir más campos según lo necesites
                producto: productoConsulta._id, // Se guarda la referencia al producto encontrado
               user:userConsulta._id,
               estado:"En procesamiento",

                // Otros campos del pedido...
            });

            // Guardar el nuevo pedido en la base de datos
            await nuevoPedido.save();

            res.json({
                message: "Pedido creado correctamente",
                pedido: nuevoPedido
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

router.put("/pedidos/:id", async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body; // Extrae el nuevo valor del estado del cuerpo de la solicitud
 
    try {
       // Actualiza solo el campo 'estado' del pedido con el ID dado
       await pedidosSchema.updateOne({ _id: id }, { estado: estado });
 
       res.status(200).json({ message: "Estado del pedido actualizado exitosamente" });
    } catch (error) {
       console.error("Error al actualizar el estado del pedido:", error);
       res.status(500).json({ message: "Error al actualizar el estado del pedido" });
    }
 });

 router.get("/pedidos/:userId", async (req, res) => {
    const { userId } = req.params;
 
    try {
       
       // Encuentra todos los pedidos asociados con el usuario dado
       const userPedidos = await pedidosSchema.find({ user: userId });
 
       // Verifica si el usuario tiene pedidos
       if (!userPedidos || userPedidos.length === 0) {
          return res.status(404).json({ message: "No se encontraron pedidos para este usuario" });
       }
 
       res.status(200).json(userPedidos);
    } catch (error) {
       console.error("Error al obtener los pedidos del usuario:", error);
       res.status(500).json({ message: "Error al obtener los pedidos del usuario" });
    }
 });
 
 module.exports = router;