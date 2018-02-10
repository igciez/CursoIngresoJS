function Mostrar()
{
var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad>=13&&edad<=17) {} //sino poner el !! que es el "o" entre las edades.

	else{

		alert("No es persona adolescente");
	}


}//FIN DE LA FUNCIÓN