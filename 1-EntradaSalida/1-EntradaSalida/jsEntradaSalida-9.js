/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var ingreseSueldo;
	var resultado;

	ingreseSueldo=document.getElementById('sueldo').value;
	ingreseSueldo=parseInt(ingreseSueldo);

	resultado= ingreseSueldo+(ingreseSueldo*0.1);
	
	document.getElementById("resultado").value=resultado;

	
}
