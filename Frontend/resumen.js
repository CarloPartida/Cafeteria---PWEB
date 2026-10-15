const parametros = new URLSearchParams(window.location.search);

const nombre = parametros.get('nombre') || 'Ej. Paul McCartney';
const producto = parametros.get('producto') || 'Ej. Café Latte';
const tamano = parametros.get('tamano') || 'Ej. Grande';
const cantidad = parametros.get('cantidad') || 'Ej. 2,3... n';
const observaciones = parametros.get('observaciones') || '';

document.getElementById('nombre').textContent = nombre;
document.getElementById('producto').textContent = producto;
document.getElementById('tamano').textContent = tamano;
document.getElementById('cantidad').textContent = cantidad;
document.getElementById('observaciones').textContent = observaciones;