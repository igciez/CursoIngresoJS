function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño){

	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":{
		alert("Este mes contiene 30 días.");break;
	}

	case "Febrero":{
		alert("Este mes contiene 28 días.");break;
	}
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":{
		alert("Este mes contiene 31 días.");break;
	}

}	
	



}//FIN DE LA FUNCIÓN