/**
 * Factory
 * - Função que retorna um objeto
 * - Sem necessidade da palavra-chave new
 * - Começa com letra minúscola
 * - Encapisula a criação de um objeto em uma função
*/

function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())
