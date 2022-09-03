/**
 * Factory
 * - Função que retorna um objeto
 * - Sem necessidade da palavra-chave new
 * - Começa com letra minúscola
 * - Encapisula a criação de um objeto em uma função
*/

const Pessoa = function (nome) {
  this.nome = nome
  this.falar = () => console.log(`Meu nome é ${this.nome}`)
}

const p1 = new Pessoa('João')
p1.falar()
