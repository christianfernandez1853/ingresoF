/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos

*/function mostrar()
{
  let liquidoMasCaro;
  let marca;
  let marcaLiqMasCaro;
  let marcaSolMasBarato;
  let peso;
  let precio;
  let seguir;
  let solidoMasBarato;
  let tipo;
  
  let acumPeso = 0;
  let flagLiq = 0;
  let flagPrecioMax = 0;
  let flagPrecioMin = 0;
  let flagSol = 0;

  do
  {

    marca = prompt("Ingrese la marca del producto: ");


    precio = parseInt(prompt("Ingrese el precio del producto"));

    while (!(precio > 0) || isNaN(precio))
    {
      precio = parseInt(prompt("Ingrese un precio válido. Caracteres númericos mayores a cero"));
    }


    peso = parseInt(prompt("Ingrese el peso del producto: "));

    while (!(peso > 0) || isNaN(peso))
    {
      peso = parseInt(prompt("Ingrese un peso válido. Caracteres númericos mayores a cero"));
    }

    acumPeso += peso;


    tipo = prompt("Ingrese el tipo de producto (S: Sólido / L: Líquido)");

    while (tipo != "s" && tipo != "S" && tipo != "l" && tipo != "L")
    {
      tipo = prompt("Ingrese un caracter válido para el tipo de producto (S: Sólido / L: Líquido)");
    }

    if (tipo == "l" || tipo == "L")
    {
      if (flagPrecioMax == 0 || precio > liquidoMasCaro)
      {
        liquidoMasCaro = precio;
        marcaLiqMasCaro = marca;
        flagPrecioMax = 1;
        flagLiq = 1;
      }
    }

    if (tipo == "s" || tipo == "S")
    {
      if (flagPrecioMin == 0 || precio < solidoMasBarato)
      {
        solidoMasBarato = precio;
        marcaSolMasBarato = marca;
        flagPrecioMin = 1;
        flagSol = 1;
      }
    }


    seguir = prompt("¿Desea ingresar otro producto? (S: Sí / N: No)");

    while (seguir != "s" && seguir != "S" && seguir != "n" && seguir != "N")
    {
      seguir = prompt("Ingrese un caracter válido: (S: Sí / N: No)");
    }

  } while (seguir == 's')

  // A
  console.log("A - El peso total de la compra es de: " + acumPeso);


  // B
  if (flagLiq == 1)
	{
		console.log("B - El producto líquido más caro es de la marca: " + marcaLiqMasCaro + " ($" + liquidoMasCaro + ").");
	}
	else
	{
		console.log("B - No se ingresaron productos líquidos.");
  }
  
  // C
  if (flagSol == 1)
	{
		console.log("B - El producto sólido más barato es de la marca: " + marcaSolMasBarato + " ($" + solidoMasBarato + ").");
	}
	else
	{
		console.log("B - No se ingresaron productos sólidos.");
  }

}
