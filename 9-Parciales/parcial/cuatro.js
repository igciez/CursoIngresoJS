function Mostrar()
{
	var PrimerNumero;
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
}
