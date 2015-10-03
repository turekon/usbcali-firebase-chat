$(function(){
	//var objFirebase = new Firebase('https://luminous-torch-8836.firebaseio.com/');
	var objFirebase = new Firebase('https://chatusb.firebaseio.com/');
	
	$("#btnEnviar").click(enviar_mensaje);

	function enviar_mensaje(){
		console.log("enviar_mensaje");
		var nombre = $("#txtNombre").val();
		var mensaje = $("#txtMensaje").val();

		objFirebase.push(
			{
				autor:nombre,
				mensaje:mensaje
			}
		);

		$("#txtMensaje").val('');
	}

	objFirebase.on("child_added", function(data){
		var registro = data.val();
		var plantilla = getPlantilla(registro.autor, registro.mensaje);

		$('#results').append(plantilla);

	});

	function getPlantilla(autor, mensaje){
		var html = '<div class="msg"><div class="name">' +
               '<b>' + autor + '</b>' +
               '<p>' + mensaje + '</p>' +
               '</div>';

        return html;
	}

});