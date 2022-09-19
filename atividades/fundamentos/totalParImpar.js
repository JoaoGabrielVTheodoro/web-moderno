/**
 * 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos
 * são ímpares.
*/

const exibirQuantidadeParesImpares = (vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]) => {
  let qantidadePar = 0
  let qantidadeImpar = 0

  for (const numero in vetor) {
    if (numero % 2 === 0) qantidadePar += 1
    if (numero % 2 === 1) qantidadeImpar += 1
  }

  return { qantidadePar, qantidadeImpar }
}


console.log(exibirQuantidadeParesImpares())
