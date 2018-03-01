function Mostrar()
{
	var numpares;
	var acumpares=0;
	var numero; 
	var cantpares=0;
	
	
	numero=prompt('Ingrese un número:');
	while(isNaN(numero)||numero==0) {
		numero=prompt('Ingrese un número:');
	}
	
	for(contador=1;contador<=numero;contador++){
		if(contador%2&&contador!=0){
			cantpares++;
		}
		numpares=contador%2;
		acumpares+=numpares;
		
	}


	document.write("<br>Numeros pares desde el 1 al número ingresado: "+acumpares);
	document.write("<br>Cantidad de numeros pares encontrados "+cantpares);
	


}//FIN DE LA FUNCIÓN