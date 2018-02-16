function Mostrar()
{
	var largo;
	var ancho;
	var resultado;

	largo=document.getElementById('alrgo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	resultado= (largo*2+ancho*2)*3;

	alert("Se necesitan para colocar 3 hilos de alambrado,  "+resultado + "  Metros de alambre");
}
