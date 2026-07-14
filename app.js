const express = require("express");
const app = express();
const PUERTO = 3001;


// Middleware para recibir JSON desde el body
app.use(express.json());


// Recuperar todas las laptops
app.get("/laptops", (req, res) => {

    const laptops = [
        {
            id: 100,
            marca: "Lenovo",
            procesador: "Intel Core i5",
            memoria: "16 GB",
            disco: "1 TB"
        },
        {
            id: 101,
            marca: "HP",
            procesador: "Intel Core i7",
            memoria: "16 GB",
            disco: "512 GB SSD"
        },
        {
            id: 102,
            marca: "Dell",
            procesador: "Intel Core i5",
            memoria: "8 GB",
            disco: "256 GB SSD"
        },
        {
            id: 103,
            marca: "Asus",
            procesador: "AMD Ryzen 7",
            memoria: "32 GB",
            disco: "1 TB SSD"
        },
        {
            id: 104,
            marca: "Acer",
            procesador: "AMD Ryzen 5",
            memoria: "16 GB",
            disco: "512 GB SSD"
        }
    ];

    res.send(laptops);
});


// Recuperar laptop por ID
app.get("/laptops/:id", (req, res) => {

    const id = req.params.id;

    const laptop = {
        id: id,
        marca: "Lenovo",
        procesador: "Intel Core i5",
        memoria: "16 GB",
        disco: "1 TB"
    };

    res.send(laptop);
});


// Crear laptop
app.post("/laptops", (req, res) => {

    console.log("Objeto JSON recuperado del Body:", req.body);

    req.body.id = 100;

    res.send(req.body);
});


// Actualizar laptop
app.put("/laptops/:id", (req, res) => {

    const id = req.params.id;

    console.log("ID recuperado de URL:", id);

    res.send(req.body);
});


// Eliminar laptop
app.delete("/laptops/:id", (req, res) => {

    const id = req.params.id;

    console.log("ID eliminado:", id);

    res.status(200).send();
});


// Iniciar servidor
app.listen(PUERTO, () => {
    console.log("Servidor listo en el puerto: " + PUERTO);
});