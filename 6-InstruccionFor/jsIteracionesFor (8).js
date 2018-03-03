function Mostrar()
{
	var numero;

	numero=prompt("Ingrese un numero: ");
	numero=parseInt(numero);

	/*if(isNaN(numero)){
		numero=prompt("Ingrese un numero: ");
		numero=parseInt(numero);	
	}
	for(contador=numero;contador<=numero;contador++){
		if(contador%2!=0&&contador!=0){
			alert("Es Primo");
			break;
		}
		else{
			alert("No es primo");
		}
	}  ESTA MAL
	*/

	for (contador=2;contador<numero;contador++){
		if (numero/contador==1) {
			es primo; break;
		}
		else{
			no es primo
		}
		recordar que un numero primo es divisible por 1 y por si mismo;
	}
	


}//FIN DE LA FUNCIÓN