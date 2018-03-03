//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importefinal;

	importe=prompt("Ingrese el importe del producto:");
	importe=parseInt(importe);
	importefinal=importe+(importe*0.21);
	


	document.getElementById('importe').value=importefinal;


	
}

