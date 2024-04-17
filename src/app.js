const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

const port = process.env.PORT || 3030;
app.listen(port, () => console.log("Servidor corriendo en http://localhost:3030/"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlPath)
})

app.post("/login", (req, res) => {
    res.send("Llego el formulario de ingreso");
})

app.get("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPath)
})

app.post("/register", (req, res) => {
    res.send("Llegó el formulario de registro");
})
