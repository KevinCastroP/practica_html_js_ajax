$(document).ready(function() {
    console.log("ready!");

    $('#visa').attr("disabled", true)
    $('#enviar_sbm').attr("disabled", true)
    $('#enviar_btn').val("Validar Formulario")
    $('input:radio[name=estado_civil]').filter('[value=sol]').prop('checked', true);
    $('#pasaporte').change(function() {
        console.log("evaluando pasaporte")
        if ($(this).prop('checked')) { //prop = es el estado actual, asigna y lee
            console.log("prendiendo pasaporte")
            $('#visa').prop("disabled", false)
        } else {
            console.log("apagando pasaporte")
            $('#visa').prop('checked', false)
            $('#visa').prop("disabled", true)
        }
    })

    $('#enviar_btn').click(function() {
        if (validar_primer_nombre() &&
            validar_segundo_nombre() &&
            validar_primer_apellido() &&
            validar_segundo_apellido() &&
            validar_tipo_id() &&
            validar_nro_id() == true) {
            $('#enviar_sbm').prop("disabled", false)
        }
    })
    cargar_input_select(
        'tipo_identificacion', // campo
        'http://appshub.cloud/practica_html_js_ajax/src/tipo_id.php', //url
        'CE', //valor seleccionado incialmente
        true, //borrar inputs actuales
        'Seleccione un tipo de documento' //texto para el primer elemento cuyo value=''
    )
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

function cargar_input_select(campo, url, valor_seleccionado, limpiar_antes, texto_info = null) {


    var operator = $('#' + campo)
    if (limpiar_antes) {
        operator.find('option').remove();
    }
    if (texto_info != null) {

    }

}