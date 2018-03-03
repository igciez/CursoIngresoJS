//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	largo=document.getElementById("largo").value;
	largo=parseInt(largo);
	perimetro=(largo*ancho)*6;

	alert("Se necesitan: "+perimetro+ "metros de hilos de alambre");
}

