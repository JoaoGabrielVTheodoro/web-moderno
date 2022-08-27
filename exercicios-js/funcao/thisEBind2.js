/**
 * Bind
 * - This é o valor fornecido
 * - Possui uma sequência de argumentos
 * - This -> Objeto passado para bind
*/

function Pessoa() {
  const self = this // drible do this variar
  self.idade = 0

  const incrementar = function () {
    this.idade++
    console.log(this.idade)
  }.bind(self)

  self.incrementaIdade = () => setInterval(incrementar, 1000)
  self.incrementaIdade()
}

new Pessoa()
