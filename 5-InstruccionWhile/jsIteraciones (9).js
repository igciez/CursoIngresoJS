function Mostrar()
{
	// declarar variables
	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';

	

	while(respuesta!='no'){ 
	
		numero=prompt("Ingrese Numero");
		numero=parseInt(numero);

		if (isNaN(numero)) {//corregir!!!
			alert("Solo numeros");
			continue;
		}


		
		if (contador==0) {
		contador++;
		maximo=numero;
		minimo=numero;
		}
		else{
			if(numero>maximo){
			maximo=numero;
			}
	
			else if(minimo>numero){
			minimo=numero;
			}
		}

	respuesta=prompt("Ingrese 'no' para salir");
	}
	
document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;	
	
	




}//FIN DE LA FUNCIÓN