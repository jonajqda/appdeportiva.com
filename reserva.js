
var limitePlazas = 4; 
var reservasRealizadas = 0;

function reservar(actividad, horario, reservaInfoId) {
  
    if (limitePlazas <= 0) {
        alert("Lo sentimos, las plazas para este día están llenas. No se pueden realizar más reservas.");
        return;
    }

    var nombre = prompt("Ingrese su nombre:");
    var apellido = prompt("Ingrese su apellido:");
    var edad = prompt("Ingrese su edad:");
    var correo = prompt("Ingrese su correo electrónico:");

 
    if (!nombre || !apellido || !edad || !correo) {
        alert("Por favor, complete todos los campos antes de continuar.");
        return; 
    }

  
    var codigoReserva = generarCodigoUnico();

    
    limitePlazas--;
    reservasRealizadas++;


    var reserva = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        actividad: actividad,
        horario: horario,
        codigoReserva: codigoReserva,
        correo: correo
    };


    console.log(reserva);


    if (limitePlazas === 0) {
        alert("Lo sentimos, las plazas para este día están llenas. No se pueden realizar más reservas.");
    } else {
      
        generarArchivoTexto(reserva);
    }
}

function generarCodigoUnico() {
 
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeros = "0123456789";
    var codigo = "";

    for (var i = 0; i < 3; i++) {
        codigo += letras.charAt(Math.floor(Math.random() * letras.length));
    }

    for (var j = 0; j < 3; j++) {
        codigo += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    return codigo;
}

function generarArchivoTexto(reserva) {

    if (!reserva.nombre || !reserva.apellido || !reserva.edad || !reserva.actividad || !reserva.horario || !reserva.codigoReserva || !reserva.correo) {
        alert("Error al generar el archivo. Por favor, complete todos los campos.");
        return;
    }

    var texto = "Detalles de la Reserva:\n\n" +
        "Nombre: " + reserva.nombre + "\n" +
        "Apellido: " + reserva.apellido + "\n" +
        "Edad: " + reserva.edad + "\n" +
        "Actividad: " + reserva.actividad + "\n" +
        "Horario: " + reserva.horario + "\n" +
        "Código de reserva: " + reserva.codigoReserva + "\n" +
        "Correo: " + reserva.correo;

    var blob = new Blob([texto], { type: 'text/plain' });


    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'reserva.txt';
    link.click();
}
