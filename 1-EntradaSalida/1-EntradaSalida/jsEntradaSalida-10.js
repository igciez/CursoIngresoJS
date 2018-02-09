/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var ingreseSueldo;
	var resultado;

	ingreseSueldo=document.getElementById('importe').value;
	ingreseSueldo=parseInt(ingreseSueldo);

	resultado= ingreseSueldo-(ingreseSueldo*0.25);
	
	document.getElementById("resultado").value=resultado;
	
}
