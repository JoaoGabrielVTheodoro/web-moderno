/**
 * Função Arrow
 * - Não possui a existência de um this
 * - This ligado ao contexto lexico
*/

function Pessoa() {
  this.idade = 0
  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new Pessoa()
