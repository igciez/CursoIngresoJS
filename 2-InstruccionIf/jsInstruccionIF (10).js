function Mostrar()
{
//Genero el número RANDOM entre 1 y 10 
	var RANDOM;

	RANDOM= Math.floor(Math.random() * 11);

	if (RANDOM==10 || RANDOM==9) {

		alert(RANDOM+ "  EXCELENTE");
	}

	if (RANDOM>=4 && RANDOM<=8) {

		alert(RANDOM +"  APROBO");
	}	

	if (RANDOM<4) { 

		alert(RANDOM+ "  Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN