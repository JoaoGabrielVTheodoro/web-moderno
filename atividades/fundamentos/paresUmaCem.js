/**
 * 26) Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

const exibirPares = (inicio = 1, fim = 100) => {
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

exibirPares()
