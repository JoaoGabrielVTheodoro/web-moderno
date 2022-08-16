/**
 * Array
 * - Objeto global em JS
 * - Objeto de alto nível → semelhante a lista
 * - Os tipos dos elementos não são fixos
 * - Números inteiros como índice → indexado (0, 1, 2, 3…)
 * - Unidirecional
 * - Agrupamento linear → como vetor
 * - Heterogêneo 
 * - literal = []
*/

const valores = [7.7, 8.9, 6.3, 9.2] // literal -> 4 posições
console.log(valores[0], valores[3])
console.log(valores[4]) // undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) // 5 -> quantidade de elemento

valores.push({ id: 3 }, false, null, 'teste') // adicionar um ou mais itens ao final do Array
console.log(valores)

console.log(valores.pop()) // remover um item do final do Array
delete valores[0] // deletar um valor 
console.log(valores)
console.log(typeof valores) // object
