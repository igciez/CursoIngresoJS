/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var ingreseNumero;
;

function comenzar()
{
	numeroSecreto=Math.floor(Math.random()* 101);
	console.log(numeroSecreto);
	contadorIntentos=0;
	
	
	

}

function verificar()
{
	ingreseNumero=document.getElementById('numero').value;
	ingreseNumero=parseInt(ingreseNumero);
	
	
	if (contadorIntentos>10) {

		alert("No quedan mas intentos");
		return;
	}

	contadorIntentos=contadorIntentos+1; //contador += 1; o tambien contador ++; ++ contador (cuenta y despues muestra el resultado, es preincremento);
	document.getElementById("intentos").value=contadorIntentos;
	
	if (ingreseNumero==numeroSecreto&&contadorIntentos==1){
		
		numeroSecreto=Math.floor(Math.random()* 101)
		console.log(numeroSecreto);
	}
	
	if (ingreseNumero==numeroSecreto&&contadorIntentos!=1) {

		alert("Usted es un ganador!!!"+ " Y solo en " +contadorIntentos +" Intentos");
	}
	
	
	if (ingreseNumero<numeroSecreto&&contadorIntentos!=1) {
		
		alert("Falta para llegar al numero secreto");
	}
	if(ingreseNumero>numeroSecreto&&contadorIntentos!=1){

	alert("Se paso del numero secreto"); }
}