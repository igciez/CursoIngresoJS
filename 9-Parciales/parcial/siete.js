function Mostrar()
{
	var notas;
	var sexo;
	var acumulador=0;
	var minima;
	var cantidadvarones=0;

	for(contador=0;contador<10;contador++) {
		notas=prompt("Ingrese la nota de '0 al 10': ");
		if(notas==null){
			break;
		}
		notas=parseInt(notas);
		while(isNaN(notas)||notas<0||notas>10) {
			notas=prompt("Error, Reingrese la nota de '0 al 10': ");
			notas=parseInt(notas);;
		}
		sexo=prompt("Ingrese 'm' o 'f': ");
		if(sexo==null){
			break;
		}
		while(sexo!="m"&&sexo!="f") {
			sexo=prompt("Error, Reingrese 'm' o 'f': ");
		}
		
		if(contador==0){
			minima=notas;
		}
		if (notas<minima) {
			minima=notas;
		}
		if(sexo=="m"&&notas>=6){
			cantidadvarones++;
		}
		acumulador+=notas;

	}
	alert("Promedio de todas las notas: "+(acumulador/10) + " La nota mas baja: "+minima + " Varones que su nota haya sido mayor o igual a 6: "+cantidadvarones);

}

