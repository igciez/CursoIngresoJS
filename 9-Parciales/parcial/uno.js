
function Mostrar()
{
	/*var base;
	var resultado;

	base=document.getElementById('laBase').value;
	base= parseInt(base);
	resultado=base*4;
	alert("El perimetro del cuadrado es " + resultado);
	
		base y altura por cuadro de texto, luego informar el perimetro del triangulo y la superficie:;
	*/
	
	var base;
	var altura;
	var perimetro;
	var area;

	base=document.getElementById("laBase").value;
	base=parseInt(base);
	altura=prompt("Ingrese la altura: ");
	altura=parseInt(altura);

	perimetro=(3*base);
	area=(base*altura)/2;

	alert("El perimetro de un triangulo es: "+perimetro+ "El area de un triangulo es: "+area);


}
