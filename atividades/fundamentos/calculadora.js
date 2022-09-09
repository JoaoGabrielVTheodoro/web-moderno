/**
 * 16) Utilizando a estrutura do Switch faça um programa que simule uma
 * calculadora básicaO programa recebe como parâmetros dois valores numéricos e
 * uma string referente à operação e a realize com os valoresnuméricos na ordem
 * que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará
 * a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie
 * um caso default para operações inválidas.
*/

const calculadora = (x = 0, operacao = '+', y = 0) => {
  switch (operacao) {
    case '+':
      console.log(`${x} ${operacao} ${y} = ${x + y}`)
      break
    case '-':
      console.log(`${x} ${operacao} ${y} = ${x - y}`)
      break
    case '*':
      console.log(`${x} ${operacao} ${y} = ${x * y} `)
      break
    case '/':
      console.log(`${x} ${operacao} ${y} = ${x / y} `)
      break
    default:
      console.log(`Operação Inválida`)
      break
  }
}

calculadora(1, '+', 1)
calculadora(1, '-', 1)
calculadora(2, '*', 2)
calculadora(2, '*', 2)
calculadora(12, '%', 2)
