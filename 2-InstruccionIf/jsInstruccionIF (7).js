function Mostrar()
{	
	var edad;
	var estadoCivil
	var soltero; 


	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById('estadoCivil').value;
	
	
	

	if (estadoCivil!= 'Soltero' && edad<18) {

		alert('Es muy pequeno para no ser soltero');
	}

 

	


}//FIN DE LA FUNCIÓN