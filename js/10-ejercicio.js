// Pedir al usuario un número
const numero = parseInt(prompt("Ingrese un número:"));

let esDivisible = false;

// Comprobar si el número es divisible por 2, 3, 5 o 7
if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
  esDivisible = true;
}

// Mostrar el resultado
if (esDivisible) {
  document.write('es divisible por 2, 3, 5 o 7.');
} else {
  document.write('no es divisible por 2, 3, 5 ni 7.');
}