//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numerouno;
	var numerodos;
	var multiplicacion;
	var suma;
	var resta;

	numerouno=prompt("Ingrese el primer numero:");
	numerouno=parseInt(numerouno);
	numerodos=prompt("Ingrese el segundo numero:");
	numerodos=parseInt(numerodos);

	if (numerouno==numerodos) {
		multiplicacion=(numerouno*numerodos);
	}
	if (numerouno>numerodos) {
		resta=(numerouno-numerodos);
	}
	else if(numerouno<numerodos){
		suma=(numerouno+numerodos);
	}

	document.write("<br>Numeros iguales: "+multiplicacion+" <br>Primero mayor al segundo: "+resta+" <br>Primer menor al segundo: "+suma);
}

