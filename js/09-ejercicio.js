// Solicitar al usuario que ingrese una frase
let frase = prompt("Ingrese una frase:");

// Inicializar una variable para almacenar las vocales encontradas
let vocales = "";

// Recorrer la frase y verificar cada carácter
for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i).toLowerCase(); // Convertir el carácter a minúscula

    // Verificar si el carácter es una vocal (a, e, i, o, u)
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        vocales += caracter; // Agregar la vocal encontrada a la cadena de vocales
    }
}

// Mostrar las vocales encontradas
document.write("Las vocales en la frase son: " + vocales);