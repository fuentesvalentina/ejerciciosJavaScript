let numero1 = parseInt(prompt('Ingrese el primer número'));
let numero2 = parseInt(prompt('Ingrese el segundo número'));
let numero3 = parseInt(prompt('Ingrese el tercer número'));

let numeroMayor;

if(numero1 >= numero2 && numero1 >= numero3){
 numeroMayor = numero1;
}else if (numero2 >= numero1 && numero2 >= numero3){
    numeroMayor = numero2;
}else{
    numeroMayor = numero3;
}

document.write('El numero mayor es '+(numeroMayor));