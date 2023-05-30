const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const port = 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
//seteo del las vistas(ASHEI)
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

mongoose
    .connect(
        "mongodb+srv://JaredPonce:Fredy0713@pdbbyjp.fafluhj.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Conexión exitosa a MongoDB");
    })
    .catch((error) => {
        console.error("Error al conectar a MongoDB", error);
    });

//Aca vamos a poner los forms(nasheeeeeIIIIIIIIIANASHEIIII)
const formularioDB = new mongoose.Schema({
    Nombre: String,
    Artista: String,
    Año: Number,
    Genero: String,
});
//Post
app.post("/formulario", (req, res) => {
    const { Nombre, Artista, Año, Genero } = req.body;

    const nuevoFormulario = new Formulario({
        Nombre,
        Artista,
        Año,
        Genero,
    });

    nuevoFormulario
        .save()
        .then(() => {
            res.send("Formulario enviado y almacenado en MongoDB");
        })
        .catch((error) => {
            res.status(500).send("Error al almacenar el formulario en MongoDB");
        });
});

const Formulario = mongoose.model("Formulario", formularioDB);
app.get("/index", (req, res) => {
    res.render("usuario");
});

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://192.168.40.90/test");
}
