/**
 * IF
 * - Estrutura controle
 * - Estrutura Condicional
 * - Executa a afirmação de dentro do bloco caso a condição seja verdadeira
 * - Blocos são abertos com {}
 * ELSE
 * - Executa caso o if não seja verdadeiro ou algumas das vezes falso
 * - Em portugues else é senão
*/

const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log('Aprovado!!!!')
  } else {
    console.log('Reprovado!!!!')
  }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!!!!') // cuidado!!!!

