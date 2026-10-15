const pedidoModel = require('../Models/pedidoModel');

async function registrarPedido(req, res) {
    //Son los datos que pedimos en la función.
    try {
        const nombre = req.body.nombre;
        const producto = req.body.producto;
        const tamaño = req.body.tamaño || req.body.tamano || '';
        const cantidad = Number(req.body.cantidad);
        const parallevar = req.body.parallevar ? 1 : 0;
        const observaciones = req.body.observaciones || '';

        //Estas son las validaciones donde validamos si un dato ingresado es distinto al
        //propuesto y el trim para validar que no esté en blanco.
        if (
            typeof nombre !== 'string' || !nombre.trim() ||
            typeof producto !== 'string' || !producto.trim() ||
            !Number.isInteger(cantidad) || cantidad < 1 ||
            typeof observaciones !== 'string'
        ) {
            return res.status(400).send('Datos del pedido son inválidos');
        }

        const id = await pedidoModel.registrarPedido(
            nombre.trim(),
            producto.trim(),
            tamaño.trim(),
            cantidad,
            parallevar,
            observaciones.trim()
        );

        const parametros = new URLSearchParams({
            id: id,
            nombre: nombre.trim(),
            producto: producto.trim(),
            cantidad: cantidad.toString(),
            tamaño: tamaño.trim(),
            observaciones: observaciones.trim()
        });

        res.redirect('/resumen.html?' + parametros.toString());
    } catch (error) {
        console.error('Error al registrar el pedido:', error);
        res.status(500).send('Error al guardar el pedido');
    }
}

module.exports = {
    registrarPedido
};