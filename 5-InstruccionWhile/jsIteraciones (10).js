function Mostrar()
{
	//declarar contadores y variables 
	var contador=0;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	
	
	var respuesta="si";

	while(respuesta!="no")
	{
		if (numero>0) {
			contadorPositivos++;
			acumulador+=numero; }

		else if (numero<0) {
			contadorNegativos++
			acumulador+=numero
		}
		else{
			contadorCeros++;

		}
		if (numero%2==0&&numero!=0) {
			contadorPar++;
		}
		respuesta=prompt("Para salir ingrese 'no'");
		
	}

	while(){
		if (contadorPar>0) {
			alert("");
		}
		else{
			alert("");
		}
	}




}//FIN DE LA FUNCIÓN