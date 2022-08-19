/**
 * Entendendo o Hoisting
 * - Içamento
 * - Declarações são movidas para o topo
 * - Eleva somente as declarações e não a inicialização
*/

function teste() {
  console.log('a = ', a)
  var a = 2
  console.log('a = ', a)
}

teste()

// console.log('b = ', b) // ReferenceError: Cannot access 'b' before initialization

let b = 4
console.log('b = ', b)
