$(document).ready(function() {
    console.log("ready!");
});

function validar_primer_nombre() {
    var primer_nombre = $('#primer_nombre').val();

    if (primer_nombre == null || primer_nombre == "") {
        alert("el campo primer nombre es obligatorio");
        return false
    } else if (primer_nombre.length < 3) {
        alert("el campo primer nombre debe superar 3 caracteres");
        return false
    }
    return true;
}

function validar_segundo_nombre() {
    var segundo_nombre = $('#segundo_nombre').val();

    if (segundo_nombre == null || segundo_nombre == "") {
        return true
    }
    if (segundo_nombre != null || segundo_nombre != "") {
        if (segundo_nombre.length < 3) {
            alert("el campo segundo nombre debe superar 3 caracteres");
            return false
        }
        return true;
    }
}

function validar_primer_apellido() {
    var primer_apellido = $('#primer_apellido').val();

    if (primer_apellido == null || primer_apellido == "") {
        alert("el campo primer apellido es obligatorio");
        return false
    } else if (primer_apellido.length < 3) {
        alert("el campo primer apellido debe superar 3 caracteres");
        return false
    }
    return true;
}

function validar_segundo_apellido() {
    var segundo_apellido = $('#segundo_apellido').val();

    if (segundo_apellido == null || segundo_apellido == "") {
        return true
    }
    if (segundo_apellido != null || segundo_apellido != "") {
        if (segundo_apellido.length < 3) {
            alert("el campo segundo apellido debe superar 3 caracteres");
            return false
        }
        return true;
    }
}

function validar_tipo_id() {
    var tipo_identificacion = $('#tipo_identificacion').val();

    if (tipo_identificacion == 0 || tipo_identificacion == "") {
        alert("obligatorio seleccionar una opciòn");
        return false
    }
    return true
}

function validar_nro_id() {
    var numero_identificacion = $('#numero_identificacion').val();

    if (numero_identificacion == null || numero_identificacion == "") {
        alert("el campo numero de identificaciòn es obligatorio");
        return false
    } else if (numero_identificacion.length < 7) {
        alert("el campo numero de identificaiòn debe superar 7 caracteres");
        return false
    }
    return true
}