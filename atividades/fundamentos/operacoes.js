/**
 * 1) Crie uma função que dado dois valores (passados como parâmetros) mostre no
 * console a soma, subtração, multiplicação e divisão desses valores.
*/

function calcular(x = 0, y = 0) {
  console.log(`${x} + ${y} = ${x + y}`)
  console.log(`${x} - ${y} = ${x - y}`)
  console.log(`${x} * ${y} = ${x * y}`)
  console.log(`${x} / ${y} = ${x + y}`)
}

calcular(2, 2)
