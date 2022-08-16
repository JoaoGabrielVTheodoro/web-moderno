/**
 * Template String
 * - Tagged Template String → Definição 
 * - Possibilidade de quebra de linhas → considerados 
 * - Interpolação → Converter variável dentro do próprio texto
*/

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)
