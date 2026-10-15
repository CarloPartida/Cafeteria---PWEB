const conexion = require('../database');

async function registrarPedido(nombre, producto, tamaño, cantidad, parallevar, observaciones) {
    const db = await conexion(); 

    //Hacemos el insert de los datos
    const sql = ` 
        INSERT INTO ped (nombre, producto, tamaño, cantidad, parallevar, observaciones)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    //Los campos que vamos a darle a labase de datos
    const [resultado] = await db.execute(sql, [
        nombre,
        producto,
        tamaño,
        cantidad,
        parallevar,
        observaciones
    ]);

    await db.end();

    return resultado.insertId;
}

//Usa la función para registrar el pedido
module.exports = {
    registrarPedido
};