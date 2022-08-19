/**
 * Operadores: Destructuring #01
 * - A sintaxe de **atribuição via desestruturação (destructuring assignment)** é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas
 * - Tirar da estrutura
 * - Funciona com arrays e objetos
 * - Para desestruturar um objeto usa-se {}
 * - Para desestruturar um array usa-se []
 * - ES6 - 2015
*/

function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
// console.log(rand()) // TypeError: Cannot read properties of undefined (reading 'min')
