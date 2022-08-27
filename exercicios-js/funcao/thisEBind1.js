/**
 * Bind
 * - This é o valor fornecido
 * - Possui uma sequência de argumentos
 * - This -> Objeto passado para bind
*/

const pessoa = {
  saudacao: 'Bom-dia!',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar // conflito entre OO e Funcional
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()