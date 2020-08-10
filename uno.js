/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let edad;
	let edadProm;
	let mascMayorPeso;
	let mayorPeso;
	let nombre;
	let peso;
	let sexo;
	
	let acumEdad = 0;
	let contFem = 0;
	let flagMasc = 0;
	let flagPeso = 0;


	for (let i = 0; i < 5; i++)
	{

		nombre = prompt("Ingrese nombre del paciente: ");


		peso = parseInt(prompt("Ingrese el peso del paciente: "));

		while (!(peso > 0) || isNaN(peso))
		{
			peso = parseInt(prompt("Ingrese un peso válido (sólo caracteres númericos mayores a 0)"));
		}


		sexo = prompt("Ingrese el sexo del paciente (M: Masculino / F: Femenino):");

		while (sexo != "m" && sexo != "M" && sexo != "f" && sexo != "F")
		{
			sexo = prompt("Ingrese un caracter válido (M: Masculino / F: Femenino):");
		}
		
		if (sexo == "f" || sexo == "F")
		{
			contFem++;
		}


		if (sexo == "m" || sexo == "M") 
		{
			if ((flagPeso == 0 || peso > mayorPeso))
			{
				mayorPeso = peso;
				mascMayorPeso = nombre;
				flagPeso = 1;
				flagMasc = 1;
			}
		}


		edad = parseInt(prompt("Ingrese la edad del paciente: "));

		while (!(edad > 0) || isNaN(edad))
		{
			edad = parseInt(prompt("Ingrese una edad válida del paciente: (números mayores a 0) "));
		}

		acumEdad += edad;
		
	}

	// A
	console.log("A - La cantidad de pacientes femeninos es: " + contFem);

	// B

	edadProm = acumEdad / 5;
	console.log("B - La edad promedio del total de pacientes es: " + edadProm);

	// C
	if (flagMasc == 1)
	{
		console.log("C - El hombre de mayor peso es: " + mascMayorPeso + " (" + mayorPeso + "kg)");
	}
	else
	{
		console.log("No se ingresaron pacientes hombres");
	}
}	

