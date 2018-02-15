function Mostrar()
{	
	var edad;
	var estadoCivil
	var soltero; 


	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	document.getElementById('estadoCivil').value=estadoCivil;
	
	
	

	if (estadoCivil!= 'soltero' && edad<18) {

		alert('Es muy pequeno para no ser soltero');
	}

 

	


}//FIN DE LA FUNCIÓN