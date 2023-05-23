const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const port = 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
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
