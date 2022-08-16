/**
 * Number:
 *  - Tipo de Dados numérico
 *  - Serve Para Integers tanto quanto para Floats
 *  - Maiuscola  primeira letra -> Number -> Função
 *  - Minuscola primeira letra -> number -< tipo
*/

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // controlar casas decimais com toFixed -> Não altera o valor de média
console.log(media.toString(2)) // converter para uma string binária
console.log(typeof media) // number
