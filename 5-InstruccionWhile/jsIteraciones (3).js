function Mostrar()
{
	var clave;
	var contador;
	contador=0;
	
	
	while(clave!="utn750"){ 
		clave=prompt("ingrese el número clave.");
		document.write("<br> Clave incorrecta");
		contador++;
	}



document.write("<br> Bienvenido, ingresaste en "+contador +"Intentos" );
}//FIN DE LA FUNCIÓN
