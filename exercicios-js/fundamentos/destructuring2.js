/**
 * Operadores: Destructuring #01
 * - A sintaxe de **atribuição via desestruturação (destructuring assignment)** é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas
 * - Tirar da estrutura
 * - Funciona com arrays e objetos
 * - Para desestruturar um objeto usa-se {}
 * - Para desestruturar um array usa-se []
 * - ES6 - 2015
*/

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
