//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;

	mes=prompt("Ingrese un mes:");
	switch(mes){
		case "enero":
		case "febrero":
			alert("Es veranito");break;
		default:
			alert("extraño enero y febrero");break;
	}
	
}

