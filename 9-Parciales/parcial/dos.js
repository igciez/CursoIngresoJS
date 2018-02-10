function Mostrar()
{
  var importe;
  var importefinal;

  importe=prompt("Ingrese el importe");
  importe=parseInt(importe);
  importefinal=importe+(importe*0.21);

 document.getElementById('importeFinal').value=importefinal;

}
