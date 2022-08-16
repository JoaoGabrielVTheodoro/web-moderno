/**
 * Exemplos Básicos de Funções #02
 * 
 * - Funções podem ser declaradas em variáveis → função anônima → nome da variável a define
 * - Funções Anônimas podem ser passadas como parâmetros de outras funções
 * - Funções anônimas não possuem um nome
 * - Função declarada tem que ser invocada para ser executada
*/

// armazenando uma função em uma variável -> função anônima -> sem nome
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando uma função arrow em uma variável
const soma = (a, b) => {
  return a + b
}

console.log(soma(2, 3))

// retorno implicito

const subtracao = (a, b) => a - b // única sentença
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!!')
