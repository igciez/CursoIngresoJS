//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notas;
	var sexo;
	var acmuladornotas=0;
	var notamasbaja;
	var cantidadvarones=0;

	for(contador=0;contador<6;contador++){
		notas=prompt('Ingrese la nota: ');
		if(notas==null){
			break;
		}
		notas=parseInt(notas);
		while(isNaN(notas)||notas<0||notas>10){
			notas=prompt('Error, Reingrese la nota (recuerde que sea un numero y que esté entre 0 y 10: ');
			notas=parseInt(notas);
		}
		sexo=prompt('Ingrese el sexo, "m" o "f": ');
		while(sexo!="m"&&sexo!="f"){
			sexo=prompt('Error, reingrese el sexo, "m" o "f": ');
		}
		acmuladornotas+=notas;
		if(contador==0){
			notamasbaja=notas;
		}
		else{
			if (notas<notamasbaja) {
				notamasbaja=notas;
			}
		}
		if(notas>=6&&sexo=="m"){
			cantidadvarones++;
		}
	}
	document.write('<br>El promedio de las notas es: '+(acmuladornotas/6)+"<br>La nota mas baja fue de: "+notamasbaja+"<br>Cantidad de varones que su nota haya sido mayor o igual a 6, es: "+cantidadvarones);
	
}

