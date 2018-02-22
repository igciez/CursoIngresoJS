/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparas;
 	var importe;
 	var marca;
 	var precioDescuento;

 	lamparas=document.getElementById('Cantidad').value;
 	importe=lamparas*35;
 	marca=document.getElementById('Marca').value;

 	
 	switch (lamparas) {

 		case "5":{
 			if (marca=='ArgentinaLuz') {
 				document.getElementById("precioDescuento").value=(importe-(importe*0.4));
 			}
 			if (marca!='ArgentinaLuz') {
 				document.getElementById("precioDescuento").value=(importe-(importe*0.3));
			};break;
 		}
 		case "4":{
 			if (marca=='ArgentinaLuz'|| marca=='FelipeLamparas') {
 				document.getElementById("precioDescuento").value=(importe-(importe*0.25));
 			}
 			if (marca!='ArgentinaLuz'|| marca!='FelipeLamparas') {
 				document.getElementById("precioDescuento").value=(importe-(importe*0.20));
 			};break;
 		}
 		case "3":{
 			if (marca=='ArgentinaLuz') {
 				document.getElementById("precioDescuento").value=(importe-(importe*0.15));
			}
			if (marca=='FelipeLamparas') {
				document.getElementById("precioDescuento").value=(importe-(importe*0.10));
			}
			if (marca!='ArgentinaLuz'|| marca!='FelipeLamparas') {
			document.getElementById("precioDescuento").value=(importe-(importe*0.05));	
			};break;
 		}
 		default/*case 6:{}*/:{
			document.getElementById("precioDescuento").value=(importe-(importe*0.5));break; 
		}
 	}

 	precioDescuento=document.getElementById("precioDescuento").value;
 	precioDescuento=parseInt(precioDescuento);

 	if (precioDescuento>120) {

 		alert("IIBB Usted pago " +(precioDescuento+(precioDescuento*.1)) + " siendo "+(precioDescuento*.1)+ " el impuesto que se pagó");

	}




 	/*if (lamparas>=6) {

 		document.getElementById("precioDescuento").value=(importe-(importe*0.5));

 	}

 	if (lamparas==5&&marca=='ArgentinaLuz'){

 		document.getElementById("precioDescuento").value=(importe-(importe*0.4));
 	}

 	if (lamparas==5&&marca!='ArgentinaLuz') {

 		document.getElementById("precioDescuento").value=(importe-(importe*0.3));
 	}*/





 	
}
