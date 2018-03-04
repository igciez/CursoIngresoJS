//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var resultado;

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	largo=document.getElementById('largo').value;
	largo=parseInt(largo);
	resultado=(2*ancho+2*largo);
	alert('El perimetro por 6 hilos de alambrados es: '+resultado);




	
}

