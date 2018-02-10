
function Mostrar()
{
	var base;
	var resultado;

	base=document.getElementById('laBase').value;
	base= parseInt(base);
	resultado=base*4;
	alert("El perimetro del cuadrado es " + resultado);

}
