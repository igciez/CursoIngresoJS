function Mostrar()
{
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
//tomo la edad  
if (edad>=18) {

	alert("Es mayor de edad");
} 

else{

	alert("Es menor de edad");
}

}//FIN DE LA FUNCIÓN