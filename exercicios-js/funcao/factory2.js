/**
 * Factory
 * - Função que retorna um objeto
 * - Sem necessidade da palavra-chave new
 * - Começa com letra minúscola
 * - Encapisula a criação de um objeto em uma função
*/

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.2
  }
}
