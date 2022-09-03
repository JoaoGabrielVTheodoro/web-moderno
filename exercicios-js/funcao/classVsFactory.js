/**
 * Class
 * - Forma Diferente de Construir Funções
 * - ES 2015
 * - Função Escrita de Uma Forma Diferente
 * - Não tem **Hoisting**
*/

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const p2 = criarPessoa('João')
p2.falar()
