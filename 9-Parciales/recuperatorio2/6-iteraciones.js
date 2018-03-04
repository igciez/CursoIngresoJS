//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var mayorimporte;
	var menorimporte;

	for(contador=0;contador<7;contador++){
		importe=prompt('Ingrese el importe de la venta: ');
		if(importe==null){
			break;
		}
		importe=parseInt(importe);
		while(isNaN(importe)||importe<=0){
			importe=prompt('Error, reingrese el importe de la venta (recuerde que sea un numero y mayor a cero)');
			importe=parseInt(importe);
		}
		if(contador==0){
			mayorimporte=importe;
			menorimporte=importe;
		}
		else{
			if(importe>mayorimporte){
				mayorimporte=importe;
			}
			if(importe<menorimporte){
				menorimporte=importe;
			}
		}
	}

	document.write('<br>El mayor importe de la venta fue '+mayorimporte+'<br> El menor importe de la venta fue: '+menorimporte);
	
	
}

