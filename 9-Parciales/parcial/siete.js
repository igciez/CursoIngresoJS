function Mostrar()
{
	var notas;
	var sexo;
	var acumulador=0;
	var contador=0;

	for(contador=1;contador<=10;contador++) {
		notas=prompt("Ingrese la nota de '0 al 10': ");
		notas=parseInt(notas);
		if (isNaN(notas)) {
				continue;}
		
		if(notas<0&&notas>10){
			continue;}
		
		sexo=prompt("Ingrese 'm' o 'f': ");
		
		if (sexo!="m"||sexo!="f") {
			continue;
		}
		acumulador+=notas;
		if(contador==0){
			maximo=notas
		}
	}


}

