const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const port = 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.get("/", (req, res) => {
    res.send("si");
});
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
