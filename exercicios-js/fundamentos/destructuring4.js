/**
 * Operadores: Destructuring #01
 * - A sintaxe de **atribuição via desestruturação (destructuring assignment)** é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas
 * - Tirar da estrutura
 * - Funciona com arrays e objetos
 * - Para desestruturar um objeto usa-se {}
 * - Para desestruturar um array usa-se []
 * - ES6 - 2015
*/

function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
// console.log(rand()) // TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))

