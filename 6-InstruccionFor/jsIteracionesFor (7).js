function Mostrar()
{
	var numero;
	var cantdivisores=0;

	numero=prompt("Ingrese un número: ");
	numero=parseInt(numero);
	
	
	if(isNaN(numero)){
		numero=prompt("Ingrese un número: ");
		numero=parseInt(numero);
		}
	
	for(contador=1;contador<=numero;contador++){
		if(numero%contador==0&&contador!=0){
			cantdivisores++;
			document.write("<br>Los divisores son: "+contador);
		}	
	}
	document.write("<br>La cantidad de de divisores encontrados son: "+cantdivisores);

}//FIN DE LA FUNCIÓN