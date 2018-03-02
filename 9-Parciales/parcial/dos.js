function Mostrar()
{
  /*var importe;
  var importefinal;

  importe=prompt("Ingrese el importe");
  importe=parseInt(importe);
  importefinal=importe+(importe*0.21);

 document.getElementById('importeFinal').value=importefinal;
se ingresa un porcentaje de descuento y el importe mostrar cuanto se debe pagar, ej 20%, de 100 pesos, debo pagar 80.
*/

	var importe;
	var porcentaje;
	var importefinal;

	porcentaje=prompt("Ingrese el descuento: ");
	porcentaje=parseInt(porcentaje);
	importe=prompt("Ingrese el importe: ");
	importe=parseInt(importe);
	importefinal=importe-(importe*(porcentaje/100));

	document.getElementById("importeFinal").value=importefinal;

}
 

