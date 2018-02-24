function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;
	

	while(true){
		
		numero=prompt("Ingrese numero");
		if (numero==null) {
			break; }
			
		else {
			
			numero=parseInt(numero); //cualquier cosa que se le coloque al parseint, que no sea numero da nan,que nunca va a ser null
		
			if (isNaN(numero)) {
				alert("Ingrese un numero para continuar");
				continue;
			}

			//numero=prompt("Ingrese número");// no se tiene que repetir
		
			if (numero>0) {
				positivo+=numero;//positivo=positivo+numero
			}
			else if(numero<0){
				negativo*=numero; //negativo=negativo*numero;
			}
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN