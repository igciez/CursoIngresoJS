//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeros;
	var cantidadpares=0;
	var contador=0;
	var acumulador=0;
	var numerominimo;
	var numeromaximo;


	while(true){
		numeros=prompt("Ingrese numeros positivos: ");
		if(numeros==null){
			break;
		}
		else{
			numeros=parseInt(numeros);
			while(numeros<=0){
				numeros=prompt("Error, Reingrese solo numeros positivos: ");
				numeros=parseInt(numeros);
			}
			if(numeros%2==0){
				cantidadpares++;
			}
			acumulador+=numeros;
			contador++;

			if(contador==1){
				numerominimo=numeros;
				numeromaximo=numeros;
			}
			else{
				if(numeros>numeromaximo){
					numeromaximo=numeros;
				}
				if(numeros<numerominimo){
					numerominimo=numeros;
				}
			}
		}
	}
	document.write("<br>La cantidad de numeros pares es: "+cantidadpares+"<br>El promedio de todos los numeros ingresados es: "+(acumulador/contador)+"<br>El numero máximo y mínimo, respectivamente, es: "+numeromaximo+ " y "+numerominimo);
	
}

