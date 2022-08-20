/**
 * # Contexto de Execução: Browser vs Node
 * - Front-end → browsers
 *    - Disputa de arquivos minificados no escopo global
 * - Back-end → node
 *    - Todos os arquivos são módulos
*/

let a = 3 // local

global.b = 3
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

abc = 123

console.log(global.abc) // variável maluca, sem var ou let - Não faça isso em casa!!!!

// module.exports = { e, f, g }
