function Mostrar()
{

var sexo = prompt("ingrese f ó m .");


while(sexo!="f"&&sexo!="m"){
	sexo = prompt("ingrese f ó m .")
}


if(sexo="f"){
	sexo="Femenino";
	document.getElementById('Sexo').value=sexo;
}
if (sexo="m") {
	sexo="Masculino";
	document.getElementById("Sexo").value=sexo;
}
//document.getElementById('Sexo').value=sexo;

//document.write()

}//FIN DE LA FUNCIÓN