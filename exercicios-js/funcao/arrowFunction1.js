/**
 * Função Arrow
 * - Não possui a existência de um this
 * - This ligado ao contexto lexico
*/

let dobro = function (a) {
  return a * 2
}

dobro = (a) => {
  return a * 2
}

dobro = a => a * 2 // return implícito

console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())
