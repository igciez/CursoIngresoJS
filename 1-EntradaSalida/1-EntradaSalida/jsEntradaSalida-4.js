/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre= prompt("ingresa tu nombre").value;
	edad=document.getElementById("elNombre").value;
	alert(nombre);
	alert(edad);
}

