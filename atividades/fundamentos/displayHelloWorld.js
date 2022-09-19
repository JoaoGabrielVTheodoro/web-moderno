/**
 * 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando
 * uma estrutura de repetição while.
*/

const exibirHelloWorld = (vezes = 11) => {
  for (let i = 1; i <= vezes; i++) {
    console.log('Hello World!!!!')
  }
}

exibirHelloWorld()
