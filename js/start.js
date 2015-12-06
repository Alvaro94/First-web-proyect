$('#save-client').click(function() {
    var usuario = document.getElementById("correo").value;
    var contrasena = document.getElementById("password").value;
    var contra = document.getElementById("password2").value;
    var apellido = document.getElementById("apellido").value;


    if (usuario == '' || contrasena == '') {

      return alert('Uno o varios campos están en blanco');
    }

    localStorage.setItem("correo", usuario);
    localStorage.setItem("password", contrasena);
    localStorage.setItem("password2", contra);
    localStorage.setItem("apellido", apellido);
    location = "login.html"

});

$('#iniciar_sesion').click(function() {

    var user = document.getElementById("correo").value;
    var password = document.getElementById("password").value;
    var registroUser = localStorage.getItem("correo");
    var registroPass = localStorage.getItem("password");
    if (user == registroUser && password == registroPass) {
        return location = "file:///C:/Users/Alvaro/Desktop/Proyecto%20Web/principal_salida.html"
    }
    window.alert("Usuario/contraseña incorrectos.. Algo puso mal");
});

//lo nuevo
$('#enviar_correo').click(function() {
  var destino = document.getElementById("correo_destino").value;
  var asunto = document.getElementById("asunto").value;
  var contenido = document.getElementById("contenido").value; 
  var enviados = getEnviados();
  var id = enviados.length + 1;
  var correo = {
    "id": id,
    "destino": destino,
    "asunto": asunto,
    "contenido": contenido,
    "fecha": new Date()
  };
  if (destino != "" && asunto != "" && contenido != "") {
    enviados.push(correo);
    setEnviados(enviados);

  }
});

$('#guardar_correo').click(function() {
  var destino = document.getElementById("correo_destino").value;
  var asunto = document.getElementById("asunto").value;
  var contenido = document.getElementById("contenido").value; 
  var salida = getSalida();
  var id = salida.length + 1;
  var correo = {
    "id": id,
    "destino": destino,
    "asunto": asunto,
    "contenido": contenido,
    "fecha": new Date()
  };
  if (destino != "" && asunto != "" && contenido != "") {
    salida.push(correo);
    setSalida(salida);

  }
});

function getEnviados() {
  var enviados = JSON.parse(localStorage.getItem('enviados'));
  return enviados ? enviados : [];
}

function setEnviados(datos) {
  localStorage.setItem('enviados', JSON.stringify(
    datos));
}

function getSalida() {
  var salida = JSON.parse(localStorage.getItem('salida'));
  return salida ? salida : [];
}

function setSalida(datos) {
  localStorage.setItem('salida', JSON.stringify(
    datos));
}



function imprimirEnviados() {
  var enviados = getEnviados();
  var tableBody = $('#tEnviados').find('tbody');
  var body = '';
  enviados.forEach(function(enviado, index, array) {
    body +=
      '<tr>' +
      '<td id="b1">' + enviado.destino + '</td>' +
      '<td id="b1">' + enviado.asunto + '</td>' +
      '<td id="b1">' + enviado.contenido + '</td>' +
      '<td id="b1">' + enviado.fecha + '</td>' +
      '<td id="b1"><button id="eliminar_correo_enviados" data-id="' +
      enviado.id + '" class="">Eliminar</button></td></tr>';
  });

  tableBody.empty();
  tableBody.append(body);

}

function imprimirSalida() {
  var salida = getSalida();
  var tableBody = $('#tSalida').find('tbody');
  var body = '';
  salida.forEach(function(salida, index, array) {
    body +=
      '<tr>' +
      '<td id="b1">' + salida.destino + '</td>' +
      '<td id="b1">' + salida.asunto + '</td>' +
      '<td id="b1">' + salida.contenido + '</td>' +
      '<td id="b1">' + salida.fecha + '</td>' +
      '<td id="b1"><button id="editar_correo_salida" data-id="' + salida.id +
      '" class="" >Editar</button><button id="eliminar_correo_salida" data-id="' +
      salida.id + '" class="">Eliminar</button></td></tr>';
  });

  tableBody.empty();
  tableBody.append(body);
}


$(document).delegate("#editar_correo_salida", "click", function() {
  var id = $(this).data('id');
  location = location = "editar.html?id=" + id;
});

$(document).delegate('#eliminar_correo_salida', "click", function() {
  var id = $(this).data('id');
  var salida = getSalida();
  var datos = [];
  salida.forEach(function(element, index) {
    if (element.id != id) {
      datos.push(element);
    }
  });
  setSalida(datos);
  imprimirSalida();
});

$(document).delegate('#eliminar_correo_enviados', "click", function() {
  var id = $(this).data('id');
  var enviados = getEnviados();
  var datos = [];
  enviados.forEach(function(element, index) {
    if (element.id != id) {
      datos.push(element);
    }
  });
  setEnviados(datos);
  imprimirEnviados();
});

function setEditarData() {

  var salida = getSalida();
  var id = window.location.search.split('=')[1];
  $('#mover_correo').data('id',id);
  var destino = document.getElementById('destino');
  var asunto = document.getElementById('asunto');
  var editor = document.getElementById("contenido");
  var datos;

  salida.forEach(function(element, index) {
    if (element.id == id) {
      return datos = element;
    }
  });
  destino.value = datos.destino;
  asunto.value = datos.asunto;
  editor.value = datos.contenido;

}

$('#mover_correo').click(function() {

  var id = $('#mover_correo').data('id');

  var salida = getSalida();
  var enviados = getEnviados();
  var newSalida = [];

  salida.forEach(function(element,index){

  	if(element.id != id){
  		newSalida.push(element);
  	}else{
  		enviados.push(element);
  	}
  });

  setSalida(newSalida);
  setEnviados(enviados);
  
});
