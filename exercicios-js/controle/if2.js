/**
 * IF
 * - Estrutura controle
 * - Estrutura Condicional
 * - Executa a afirmação de dentro do bloco caso a condição seja verdadeira
 * - Blocos são abertos com {}
*/

function teste1(num) {
  if (num > 7)
    console.log(num)

  console.log('Final!!!!')
}

teste1(6)
teste1(8)

function teste2(num) {
  if (num > 7); { // não faça isso no if. Não usar ; com as estruturas de controle
    console.log(num)
  }
}

teste2(6)
teste2(8)
