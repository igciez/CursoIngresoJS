function Mostrar()
{
	/*pedir tres datos hasta que el cliente quiera, los datos son, 
	nombre del animal, 
	peso del animal validar que sea mayor que cero,
	la temperatura del habitat del animal, la temperatura es entre -40 y +40;
	informar: el nombre del anumals mas pesado,
				el nombre del aniumal con la temperatura mas baja,
				la cantidad de temperatura pares que se ingresaron,
				el promedio del peso de todos los animales,
				la temperatura maxima y la temperatura minima,
	*/

	var nombre;
	var temperatura;
	var peso;
	var respuesta;
	var contador=0;
	var pesomax;
	var tempmin;
	var cantemp=0;
	var acumulador=0;
	var animalfrio;

	while(true){

		nombre=prompt("Ingrese el nombre del animal: ");
		if(nombre==null){
				break;
		}
		peso=prompt("Ingrese el peso del animal: ");
		peso=parseInt(peso);
		while(peso<=0||isNaN(peso)){
	 	peso=prompt("Ingrese el peso del animal: ");	
		}
		temperatura=prompt("Ingrese la temperatura entre -40 y +40: ");
		temperatura=parseInt(temperatura);
		while(temperatura<(-40)||temperatura>40||isNaN(temperatura)){
		 temperatura=prompt("Ingrese la temperatura entre -40 y +40: ");
		}
		if(contador==0){
			pesomax=peso;
			tempmin=temperatura;
			tempmax=temperatura;
			animalfrio=nombre;
		}
		else{ 
			if(peso>pesomax){
				pesomax=peso+""+nombre;
			}
			if(temperatura<tempmin){
				tempmin=temperatura;
				animalfrio=nombre;
			}
			if (temperatura>tempmax){
				tempmax=temperatura;
			}
			if(temperatura%2==0){
				cantemp++;
			}
		}
		acumulador+=peso;
		contador++;
	}
	document.write("<br>El nombre del animal mas pesado es: "+pesomax+ "<br> Animal con temperatura mas baja: "+animalfrio+ "<br> Temperatura minima: "+tempmin+ "<br> Promedio de todos los animales: "+(acumulador/contador)+"<br> Temperatura maxima y minima: "+tempmax+"y "+tempmin)

}
