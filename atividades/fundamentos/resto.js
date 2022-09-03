/**
 * 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A
 * função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/

function resto(dividendo = 0, divisor = 0) {
  return `
    Resultado: ${Math.floor(dividendo / divisor)}
    Resto: ${dividendo % divisor}
  `
}

console.log(resto(16, 2))
console.log(resto(16, 3))
console.log(resto(16, 2))
console.log(resto(14, 5))
