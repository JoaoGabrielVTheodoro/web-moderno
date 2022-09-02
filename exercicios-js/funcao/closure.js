/**
 * Closures
 * - Um *closure* (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
 * - Fechamento
 * - Tipo de Objeto especial
 * - Associar dados com uma função
 * - Escopo criado quando a função é declarada
 * - Esse Escopo permite a função acessar e manipular variáveis externas a função
*/

const x = 'Global' // contexto léxico em ação

function fora() {
  const x = 'Local'

  function dentro() {
    return x
  }

  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
