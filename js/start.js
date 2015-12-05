$('#save-client').click(function() {
    var usuario = document.getElementById("correo").value;
    var contrasena = document.getElementById("password").value;
    var contra = document.getElementById("password2").value;
    var apellido = document.getElementById("apellido").value;


    if (usuario == '' || contrasena == '') {

      return alert('LLene los campos');
    }

    localStorage.setItem("correo", usuario);
    localStorage.setItem("password", contrasena);
    localStorage.setItem("password2", contra);
    localStorage.setItem("apellido", apellido);
    location = "login.html"

});

$('#iniciar_sesion').click(function() {

    var user = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var registroUser = localStorage.getItem("email");
    var registroPass = localStorage.getItem("password");
    if (user == registroUser && password == registroPass) {
        return location = "principal_salidaenviar.html"
    }
    window.alert("Usuario/contraseña invalidos");
});




