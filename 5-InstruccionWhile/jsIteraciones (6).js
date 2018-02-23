function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var interaciones=5;
	var promedio
	
	while(contador<interaciones){

		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
	}


	promedio=acumulador/contador
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN