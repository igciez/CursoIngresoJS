function Mostrar()
{
	var edad;
	

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	
//tomo la edad  
if (edad<13) {

	alert("Es menor de edad");
}

if(edad>=13&&edad<=18) {

	alert("Es adolescente");
}

else{ 
	
	alert("es mayor de edad");

}


}//FIN DE LA FUNCIÓN