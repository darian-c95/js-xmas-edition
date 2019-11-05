function validarNombre(nombre) {
    if (nombre === '') {
        return 'El campo nombre no debe quedar vacio.';
    } else if (nombre.length >= 50) {
        return 'El campo nombre debe tener menos caracteres.';
    } else if (!/^[A-z ]+$/i.test(nombre)) {
        return 'El campo nombre tiene caracteres inválidos.';
    } else {
        return '';
    }
}

function validarCiudad(ciudad) {
    if (ciudad === '') {
        return 'El campo ciudad no debe quedar vacio.';
    } else {
        return '';
    }
}

function validarComportamiento(comportamiento) {
    if (comportamiento === '') {
        return 'El campo comportamiento no debe quedar vacio.';
    } else {
        return '';
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo === '') {
        return 'El campo descripción no debe quedar vacio.';
    } else if (descripcionRegalo.length >= 100) {
        return 'El campo descripción debe tener menos caracteres.';
    } else if (!/^[0-9a-z ¡¿!\?,\.-]+$/i.test(descripcionRegalo)) {
        return 'El campo descripción tiene caracteres inválidos.';
    } else {
        return '';
    }
}

function validarFormulario(event) {
    const $form = document.querySelector("#carta-a-santa");
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);
    
    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        descripcionRegalo: errorDescripcionRegalo
    }

    manejarErrores(errores)
    event.preventDefault()
}

function manejarErrores(errores) {
    errorNombre = errores.nombre
    errorCiudad = errores.ciudad
    errorDescripcionRegalo = errores.descripcionRegalo

    if (errorNombre) {
        $form.nombre.className = "error"
    } else {
        $form.nombre.className = ""
    }

    if (errorCiudad) {
        $form.ciudad.className = "error"
    } else {
        $form.ciudad.className = ""
    }

    if (errores.descripcionRegalo) {
        $form["descripcion-regalo"].className = "error"
    } else {
        $form["descripcion-regalo"].className = ""
    }
}

const $form = document.querySelector("#carta-a-santa")
$form.onsubmit = validarFormulario