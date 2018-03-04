//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var resultado;

	importe=prompt('Ingrese el importe a calcular: ');
	importe=parseInt(importe);
	resultado=importe+(importe*.21);

	document.getElementById('importe').value=resultado;


}

