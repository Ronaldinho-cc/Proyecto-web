//Función para validar un formulario
function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var dni = document.getElementById("dni").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var codigoPostal = document.getElementById("codigo-postal").value;
    var comentario = document.getElementById("comentario").value;

    // Expresión regular para validar un correo electrónico
    var regexEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

    // Expresión regular para validar un número de DNI (8 dígitos)
    var regexDNI = /^\d{8}$/;

    // Expresión regular para validar una fecha en formato yyyy-mm-dd
    var regexFecha = /^\d{4}-\d{2}-\d{2}$/;

    // Expresión regular para validar un código postal (5 dígitos)
    var regexCodigoPostal = /^\d{5}$/;

    // Expresión regular para validar el nombre (solo letras y espacios)
    var regexNombre = /^[A-Za-z\s]+$/;

    // Validar los campos
    if (!regexNombre.test(nombre) || nombre.length < 4) {
        alert("El nombre y apellido son obligatorios y deben contener solo letras y tener al menos 4 caracteres.");
        return false;
    }

    if (!regexEmail.test(email)) {
        alert("El correo electrónico no es válido.");
        return false;
    }

    if (!regexDNI.test(dni)) {
        alert("El número de DNI debe tener 8 dígitos.");
        return false;
    }

    if (!regexFecha.test(fechaNacimiento)) {
        alert("La fecha de nacimiento debe estar en formato yyyy-mm-dd.");
        return false;
    }

    if (!regexCodigoPostal.test(codigoPostal)) {
        alert("El código postal debe tener 5 dígitos.");
        return false;
    }

    if (comentario.length > 100) {
        alert("El comentario no debe exceder los 100 caracteres.");
        return false;
    }

    // El formulario es válido, puedes enviar los datos
    return true;
}
