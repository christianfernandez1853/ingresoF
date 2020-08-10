/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/

function mostrar()
{
	let cantidad;
	let lugar;
	let masPax;
	let promPaxInv;
	let sexo;
	let sexoMasPax;
	let temporada;

	let acumPaxInv = 0;
	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let contViajesInv = 0;
	let flagInv = 0;
	let flagMasPax = 0;
	

	do
	{


		sexo = prompt("Ingrese el sexo del paciente (M: Masculino / F: Femenino):");

		while (sexo != "m" && sexo != "M" && sexo != "f" && sexo != "F")
		{
			sexo = prompt("Ingrese un caracter válido (M: Masculino / F: Femenino):");
		}

		
		lugar = prompt("Ingrese el destino: (bariloche / cataratas / salta)");

		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta")
		{
			lugar = prompt("Ingrese un destino válido (bariloche / cataratas / salta)");
		}

		if (lugar == "bariloche")
		{
			contBariloche++;
		}
		else if (lugar == "cataratas")
		{
			contCataratas++;
		}
		else
		{
			contSalta++;
		}


		temporada = prompt("Ingrese la temporada de viaje: (otoño / invierno / verano / primavera)");

		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera")
		{
			temporada = prompt("Ingrese una temporada válida: (otoño / invierno / verano / primavera)");
		}


		cantidad = parseInt(prompt("Ingrese cantidad de pasajeros: "));

		while (!(cantidad > 0) || isNaN(cantidad))
		{
			cantidad = parseInt(prompt("Ingrese una cantidad de pasajeros válida (números mayores a 0)"));
		}


		if (flagMasPax == 0 || cantidad > masPax)
		{
			sexoMasPax = sexo;
			masPax = cantidad;
			flagMasPax = 1;
		}

		if (temporada == "invierno")
		{
			acumPaxInv += cantidad;
			contViajesInv++;
			flagInv = 1;
		}


		seguir = prompt("¿Desea ingresar otra estadía? (S: Sí / N: No)");

		while (seguir != "s" && seguir != "S" && seguir != "n" && seguir != "N")
		{
			seguir = prompt("Ingrese un caracter válido: (S: Sí / N: No)");
		}


	} while (seguir == 's')


	// A

	if (contBariloche > (contCataratas && contSalta))
	{
		console.log("El lugar más elegido fue: Bariloche (" + contBariloche + " veces). ");
	}
	else if (contCataratas > (contBariloche && contSalta))
	{
		console.log("El lugar más elegido fue: Cataratas (" + contCataratas + " veces). ");
	}
	else
	{
		console.log("El lugar más elegido fue: Salta (" + contSalta + " veces). ");
	}


	// B
	if (sexoMasPax == "m" || sexoMasPax == "M")
	{
		console.log("El sexo del titular que lleva más pasajeros es: Masculino (" + masPax + " pasajeros).");
	}
	else 
	{
		console.log("El sexo del titular que lleva más pasajeros es: Femenino (" + masPax + " pasajeros).");
	}
	

	// C
	promPaxInv = acumPaxInv / contViajesInv;

	if (flagInv == 1)
	{
		console.log("El promedio de pasajeros por viaje en Invierno es de: " + promPaxInv);
	}
	else
	{
		console.log("No se registraron viajes en Invierno.");
	}
}
