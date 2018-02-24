function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=="si"){

		contador=contador+1;//contador++ 
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;//acumulador+=numero;
		respuesta=prompt("Para continuar, ingrese 'si'");//si no se pone nuevamente el valor de la respuesta, el bucle se ejecuta al infinito.
		/*sino, 
			while(true)
			if( numero==null){
				break;
				numero=prompt
				numero=parseInt(numero)
				acumulador+=numero;
				contador++;
			}
			while(confirm(){
				numero=parseInt(numero)
				acumulador+=numero;
				contador++;
			}
			while(true){
				numero=prompt();
				if (numero==isNan(numero)) {
					break; }
				numero=parseInt(numero);
				
				}
			while(isNan (numero)){
				numero=prompt("");
				numero=parseInt(numero);
			}*/
			
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN