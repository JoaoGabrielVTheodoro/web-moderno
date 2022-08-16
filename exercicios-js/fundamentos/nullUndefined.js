/**
 * NUll
 * 
 * - Valor literal em JS → Representa um valor vazio
 * - Não é uma propriedade do objeto **global**
 * - Aponta para um objeto inexistente
 * 
 * Undefined
 * 
 * - Valor global indefinido
 * - Tipo primitivo
 * - Variável no escopo global
 * - Valor inicial é undefined
 * - ES5 undefined → propriedade não configurável →Somente leitura
 * - Evitar sobrescrita
 * - Variáveis com valores não atribuidos
 * 
 * Observações
 * 
 *  - Tipos primitivos
 *    - Atribuição por valor em variáveis
 *    - Valores independentes
 *  - Objeto & Funções
 *    - Valor passado por referência
 *    - Se mudar um o outro percebe a mudança
 * 
*/

let valor // não inicializada
console.log(valor)
// console.log(valor2) ReferenceError: valor2 is not defined

valor = null // Não aponta para nenhum endereço/local de memória -> vazia
// console.log(valor.toString()) // TypeError: Cannot read properties of null (reading 'toString')
console.log(valor)

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // Remover atributo de objeto
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)
