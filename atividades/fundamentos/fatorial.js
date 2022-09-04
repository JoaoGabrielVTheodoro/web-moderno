/**
 * 12)​ Faça um algoritmo que calcule o fatorial de um número.
*/

const fatorial = (numero = 0) => numero > 0 ? numero * fatorial(numero - 1) : 1

console.log(fatorial(5))
console.log(fatorial(4))
console.log(fatorial(3))
console.log(fatorial(2))
console.log(fatorial(1))
