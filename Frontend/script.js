const parametros = new URLSearchParams(window.location.search);
//Separa todo lo que venga despues del signo de pregunta

const cliente = parametros.get('cliente');

document.getElementById('cliente').textContent = cliente;
//Sobreescribe el contenido de la etiqueta cliente y agrega su información
