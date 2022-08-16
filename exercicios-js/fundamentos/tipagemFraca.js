/**
 * Fracamente tipada -> Existe apenas um tipo genérico ou mesmo nenhum tipo de dados.
 * Assim, uma mesma variável pode receber valores numéricos, texto, booleanos, dentre outros.
 * 
 * Evitar nomes genéricos e siglas!
 * let valor = ''
 * let numero = 1
 * let pqp = false // Produto Químico perigoso... kkk
 * 
 * Escolha de bons nomes é fundamental!
*/
let qualquer = 'Legal'

console.log(qualquer)
console.log(typeof qualquer) // string

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer) // number
