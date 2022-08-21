/**
 * SWITCH
 * A instrução opcional `[break](https://developer.mozilla.org/en-US/docs/Web
 * JavaScript/Reference/Statements/break)` associada com cada `case` garante que o
 * programa saia da condicional `switch` assim que a instrução correspondente for
 * executada  e executa a instrução que segue logo após o switch. Caso `break` seja
 * omitido, o programa continua a execução para a próxima instrução dentro de `switch`.
*/

const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log('Quadro de Honra!!!!')
      break
    case 8:
    case 7:
      console.log('Aprovado!!!!')
      break
    case 6:
    case 5:
    case 4:
      console.log('Recuperação!!!!')
      break
    case 3:
    case 2:
    case 1:
    case 0:
      console.log('Reprovado!!!!')
      break
    default:
      console.log('Nota Inválida!!!!')
      break
  }

  console.log('Fim!!!!')
}


imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
