/**
 * WHILE
 * - Estrutura de repetição
 * - Repetição condicional
 * - Roda uma quantidade de vezes indeterminada
 * - Avalia a condição antes de executar a rotina
 * - É claro, dá para repetir até um certo ponto, mas use o for (Recomendado)
*/

function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!!!!')
