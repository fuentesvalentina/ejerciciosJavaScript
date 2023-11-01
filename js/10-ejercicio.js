// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt("Ingrese un número:"));

// Verificar la divisibilidad por 2, 3, 5 y 7
if (numero % 2 === 0) {
   document.write(numero + " es divisible por 2.");
} 
document.write('<br>');
if (numero % 3 === 0) {
    document.write(numero + " es divisible por 3.");
} 
document.write('<br>');
if (numero % 5 === 0) {
    document.write(numero + " es divisible por 5.");
} 
document.write('<br>');
if (numero % 7 === 0) {
    document.write(numero + " es divisible por 7.");
} 
document.write('<br>');

// Si no es divisible por ninguno de los números mencionados
if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0) {
    document.write(numero + " no es divisible por 2, 3, 5 ni 7.");
}