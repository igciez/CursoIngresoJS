/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroUno;
var numeroDos;
var operacion;
var suma;
var resta;
var multiplicacion;
var division;


function comenzar()
{
	numeroUno=Math.floor((Math.random()*10)+1);
	document.getElementById("PrimerNumero").value=numeroUno;
	numeroDos=Math.floor((Math.random()*10)+1);
	document.getElementById("SegundoNumero").value=numeroDos;
	operacion=Math.floor((Math.random()*4)+1);
	switch(operacion){
		case 1:{
			document.getElementById("Operador").value="Suma";break;
		}
		case 2:{
			document.getElementById("Operador").value="Resta";break;
		}
		case 3:{
			document.getElementById("Operador").value="Multiplicacion";break;
		}
		case 4:{
			document.getElementById("Division").value="Division";break;
		}
	}
	if(operacion==1){
		suma=numeroUno+numeroDos;
	}
	else{
		if (operacion==2) {
			resta=numeroUno-numeroDos;
		}
		if (operacion==3) {
			multiplicacion=numeroUno*numeroDos;
		}
		if(operacion==4){
			division=numeroUno/numeroDos
		}
	}
	

	

}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=document.getElementById('Respuesta').value;
	respuesta=parseInt(respuesta);
	switch(respuesta) {
		case suma:
		case resta:
		case division:
		case multiplicacion:{
			alert("Acertó");break;
		}
		default:{ 
			alert("No Acertó");break;
		}
	}

}//FIN DE LA FUNCIÓN
