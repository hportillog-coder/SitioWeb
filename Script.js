
function mostrarSeccion(id) {

    const secciones = document.querySelectorAll('section');

   secciones.forEach(sec => sec.classList.remove('active'));

    const activa = document.getElementById(id);

    if (activa) {
        activa.classList.add('active');
    }
}

function enviarFormulario(event) {

    event.preventDefault();

    const nombre = document.getElementById('nombre').value;

    document.getElementById('mensajeEnviado').innerText =
        "Gracias " + nombre + ", tu mensaje ha sido enviado.";
}