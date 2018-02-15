function Mostrar()
{
	var edad;
	var estadoCivil
	var soltero; 


	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById('estadoCivil').value;
	
	
	

	if (estadoCivil== 'Soltero' && edad>18) {

		alert('Es soltero y no es menor')
  

	 }


}//FIN DE LA FUNCIÓN