/**
 * DO/WHILE
 * - Cria um laço de repetição
 * - Laço executado antes da condição
 * - Executa-se um laço pelo menos uma vez
 * - Se a condição executada depois do laço for verdadeira, ocorre uma re-execução do laço
 * - Se falsa para o laço
*/

function getInteiroAleatorioEntre(min, max) {
  const resultado = Math.random() * (max - min) + min
  return Math.floor(resultado)
}

let opcao = -1

do {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!!!!')