/**
 *  Var
 *  - Historicamente usado em JS ou ES
 *  - Defina variáveis com bons nomes
 *  - Observe o contexto em que se encontra
 */

var a = 3

/**
 * Let
 * - Modo moderno de se usar variáveis em JS ou ES
*/

let b = 4

var a = 30

// SyntaxError: Identifier 'b' has already been declared -> Já foi declarada
// let b = 40

b = 40 // Usar, pois, já foi declarada

console.log(a, b)

a = 300
b = 400

console.log(a, b)

/**
 * Const
 * - Não pode ser atribuido um novo valor
 * - Valor único
 *    const c = 5
 *    c = 6 // TypeError: Assignment to constant variable.
*/

const c = 5
console.log(c)
