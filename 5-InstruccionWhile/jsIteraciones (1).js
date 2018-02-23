function Mostrar()
{	
	var contador;
	contador=0;

	while(contador<10){
		
		document.write("<br> "+contador);
		 contador=contador+1;//contador+1??? o contador++
	}

	document.write("<br>sali "+contador);//indica el valor del contador cuando sale de bucle while.
	//alert('iteración while');


}//FIN DE LA FUNCIÓN