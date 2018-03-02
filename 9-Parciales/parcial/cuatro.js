function Mostrar()
{
	/*var PrimerNumero;
	var SegundoNumero
	var resultado;

	PrimerNumero=prompt("Ingrese el Primer Numero");
	SegundoNumero=prompt("Ingrese el Segundo Numero");
	PrimerNumero=parseInt(PrimerNumero);
	SegundoNumero=parseInt(SegundoNumero);

	if (PrimerNumero==SegundoNumero) {

		document.write(PrimerNumero*SegundoNumero);
	}

	if(PrimerNumero>SegundoNumero) {

		document.write(PrimerNumero-SegundoNumero);
	}

	if (PrimerNumero<SegundoNumero) {

		document.write(PrimerNumero+SegundoNumero);
	}

	ingresar 2 numeros y si son iguales se concatenan. 
	si el primero es mayor que el segundo, los multiplicamos.
	si el primero es menor que es segundo los restamos.
	*/

	var PrimerNumero;
	var SegundoNumero;
	var Suma;
	var multiplicacion;
	var resta

	PrimerNumero=prompt("Ingrese primer numero: ");
	SegundoNumero=prompt("Ingrese segunfo numero: ");
	PrimerNumero=parseInt(PrimerNumero);
	SegundoNumero=parseInt(SegundoNumero);

	if (PrimerNumero==SegundoNumero) {
		Suma=PrimerNumero+""+SegundoNumero;
	}

	else if(PrimerNumero>SegundoNumero){
		multiplicacion=(PrimerNumero*SegundoNumero);
		
		if(multiplicacion%2==0&&multiplicacion!=0){
			multiplicacion=multiplicacion+" Es par";
		}
	}
	else{
		resta=PrimerNumero-SegundoNumero;
	}

	document.write("<br>Suma: "+Suma +"<br>Multiplicacion: "+ multiplicacion +"<br>Resta: "+resta);
}
