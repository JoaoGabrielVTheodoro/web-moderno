/**
 * Boolean
 * - Objeto Boolean →  Wrapper → valor Booleano 
 * - Parâmetro opcional
 * - Valor convertido para **true** ou **false**
*/

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // testar se é true ou false

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar')
console.log(!!('' || null || 0 || ' ')) // true

let nome = 'Lucas'

console.log(nome || 'Desconhecido') // valor padrão
