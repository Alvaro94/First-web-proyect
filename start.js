function validarnuevo(){
	var field=document.getElementById('correo').value;
	if (field.includes("@")) 
	{
window.location = "file:///C:/Users/Alvaro/Desktop/Proyecto%20Web/login.html";
return;
	};
	alert("Está mamando");
}

function validarlogin(){
	var field=document.getElementById('correo').value;
	if (field.includes("@")) 
	{
		alert("Bienvenido");
window.location = "file:///C:/Users/Alvaro/Desktop/Proyecto%20Web/principal_salida.html";
return;
	};
	alert("Está mamando");
}

function validarenviarcorreo(){
	var field=document.getElementById('correo').value;
	if (field.includes("@")) 
	{
window.location = "file:///C:/Users/Alvaro/Desktop/Proyecto%20Web/enviar-carga.html";
return;
	};
	alert("Está mamando");
}



