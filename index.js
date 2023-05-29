const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const port = 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://JaredPonce:<Fredy0713>@pdbbyjp.fafluhj.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(url, function(err, client) {
    if (err) {
    console.log('Error al conectar a la base de datos:', err);
    } else {
    console.log('Conexión exitosa a la base de datos');

      // Aquí puedes comenzar a definir tus rutas y configuraciones de Express.js
      // ...

      // Cierra la conexión de la base de datos cuando sea necesario
      // client.close();
    }
});

app.get('/usuarios', function(req, res) {
    const db = client.db(); // Obtiene la instancia de la base de datos

    db.collection('usuarios').find({}).toArray(function(err, result) {
    if (err) {
        console.log('Error al obtener usuarios:', err);
        res.status(500).send('Error interno del servidor');
    } else {
        res.json(result);
    }
    });
});

// Conexión a la base de datos
/*mongoose.connect('mongodb://localhost/mydatabase', {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {
console.log('Conexión exitosa a MongoDB');
})
.catch((error) => {
console.error('Error al conectar a MongoDB:', error);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
const User = mongoose.model('User', userSchema);*/




app.get("/index", (req, res) => {
    res.render('usuario')
});

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
})
main().catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb://192.168.40.90/test')}
