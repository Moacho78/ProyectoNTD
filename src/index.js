const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;

const user = require("./routes/authentication");
const inventario = require("./routes/inventarioGestor");
const listaDeseos = require("./routes/listaRoutes");
const pedidos = require("./routes/pedidosGestor");
const mongoose = require("mongoose");
require('dotenv').config();

// Parsea el cuerpo de la solicitud como JSON
app.use(parser.urlencoded({ extended: false })); // Permite leer los datos que vienen en la petición
app.use(parser.json()); // Transforma los datos a formato JSON

// Gestión de las rutas usando el middleware

app.use("/api", user);
app.use("/api", inventario);
app.use("/api", listaDeseos);
app.use("/api", pedidos);

// Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

// Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


