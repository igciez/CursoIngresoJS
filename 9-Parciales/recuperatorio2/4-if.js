//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numerouno;
	var numerodos;
	var multiplicacion;
	var resta;
	var suma;

	numerouno=prompt('Ingrese el primer numero:');
	numerouno=parseInt(numerouno);
	numerodos=prompt('Ingrese el segundo numero: ');
	numerodos=parseInt(numerodos);

	if (numerouno==numerodos) {
		multiplicacion=numerouno*numerodos;
	}
	else{
		if (numerouno>numerodos) {
			resta=numerouno-numerodos;
		}
		if (numerouno<numerodos) {
			suma=numerouno+numerodos;
		}
	}
	
	document.write('<br>Resultado de numeros iguales: '+multiplicacion+ '<br>Resultado de numero uno mayor a numero dos: '+ resta+'<br>Resultado de numero uno menor a numero dos: '+suma);
}

