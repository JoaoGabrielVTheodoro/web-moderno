/**
 * 18) Faça um programa que leia um número entre 0 e 10, e escreva este número
 * por extenso. Use o comando switch. Crie um case default que escreva ‘Número
 * fora do intervalo.’
*/

const extensos = [
  'Zero',
  'Um',
  'Dois',
  'Três',
  'Quatro',
  'Cinco',
  'Seis',
  'Sete',
  'Oito',
  'Nove',
  'Dez',
]

const exibirExtenso = (extenso = 1) => extensos[extenso] ? extensos[extenso] : 'Número fora do intervalo.'

console.log(exibirExtenso(0))
console.log(exibirExtenso(1))
console.log(exibirExtenso(2))
console.log(exibirExtenso(3))
console.log(exibirExtenso(4))
console.log(exibirExtenso(5))
console.log(exibirExtenso(6))
console.log(exibirExtenso(7))
console.log(exibirExtenso(8))
console.log(exibirExtenso(9))
console.log(exibirExtenso(10))
console.log(exibirExtenso(11))
