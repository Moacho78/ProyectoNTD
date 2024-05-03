const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router(); //manejador de rutas de express
const administradorSchema = require("../models/administrador");

router.post('/signup', async (req, res) => {
    const { nombre, correo, clave } = req.body;
    const administrador = new administradorSchema({
        nombre: nombre,
        correo: correo,
        clave: clave

    });
    const administador1 = await administradorSchema.findOne({ correo: req.body.correo });
    //validando si  se encuentra
    if (administrador1) return res.status(400).json({ error: "administrador ya existe" });
    administrador.clave = await administrador.encryptClave(administrador.clave);
    await administrador.save(); //save es un método de mongoose para guardar datos en MongoDB 
    // res.json(administrador);
    res.json({
        message: "Administrador guardado."
    });

});
//inicio de sesión
router.post("/login", async (req, res) => {
    // validaciones
    const { error } = administradorSchema.validate(req.body.correo, req.body.clave);
    if (error) return res.status(400).json({ error: error.details[0].message });
    //Buscando el administrador por su dirección de correo
    const administrador = await administradorSchema.findOne({ correo: req.body.correo });
    //validando si no se encuentra
    if (!administrador) return res.status(400).json({ error: "Administrador no encontrado" });
    //Transformando la contraseña a su valor original para 
    //compararla con la clave que se ingresa en el inicio de sesión
    const validPassword = await bcrypt.compare(req.body.clave, user.clave);
    if (!validPassword)
        return res.status(400).json({ error: "Clave no válida" });
    const token = jwt.sign({ id: administrador._id }, process.env.SECRETSS, {
        expiresIn: 60 * 60 * 24, //un día en segundos
    });
    res.json({
        auth: true,
        token,
    });

});
module.exports = router;
