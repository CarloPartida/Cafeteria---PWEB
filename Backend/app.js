const express = require("express");
const path = require("path");

require('dotenv').config();
const pedidosRoutes = require('./routes/pedidosRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../Frontend')));

//Que tome el archivo HTML de Frontend usando dirname
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/form.html'));
});

app.use(pedidosRoutes);

//Le decimos que se ejecute en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
