/**
 * Factory
 * - Função que retorna um objeto
 * - Sem necessidade da palavra-chave new
 * - Começa com letra minúscola
 * - Encapisula a criação de um objeto em uma função
*/

function criarProduto(nome = "", preco = 0.0) {
  return {
    nome,
    preco,
    desconto: 0.2
  }
}
const notebook = criarProduto('Notebook Dell', 3678)
console.log(notebook)

const macBook = criarProduto('MacBook Pro Retina', 12800)
console.log(macBook)
