//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var triangulo;
	var perimetro;

	triangulo=document.getElementById('lado').value;
	triangulo=parseInt(triangulo);
	perimetro=triangulo*3


	alert("Funciona 1-EntradaSalida  "+  perimetro);
	
}

