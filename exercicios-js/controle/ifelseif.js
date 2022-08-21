/**
 * IF
 * - Estrutura controle
 * - Estrutura Condicional
 * - Executa a afirmação de dentro do bloco caso a condição seja verdadeira
 * - Blocos são abertos com {}
 * ELSE IF
 * - Executa caso o if não seja verdadeiro ou algumas das vezes falso
 * - Em portugues else é senão
*/

Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log('Quadro de Honra!!!!')
  } else if (nota.entre(7, 8.99)) {
    console.log('Aprovado!!!!')
  } else if (nota.entre(4, 6.99)) {
    console.log('Recuperação!!!!')
  } else if (nota.entre(0, 3.99)) {
    console.log('Reprovado!!!!')
  } else {
    console.log('Nota inválida!!!!')
  }

  console.log('Fim!!!!')
}

// imprimirResultado('10') // TypeError: nota.entre is not a function
// imprimirResultado(NaN) // Nota inválida!!!!
// imprimirResultado(null) // TypeError: nota.entre is not a function
// imprimirResultado(undefined) // TypeError: nota.entre is not a function
// imprimirResultado('') // TypeError: nota.entre is not a function
imprimirResultado(10)
imprimirResultado(10)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
