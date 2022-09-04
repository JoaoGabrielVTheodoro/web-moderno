/**
 * 10) ​Crie uma função que verifica se um número inteiro passado como
 * parêmetro é divisível por 3 e retorne true ou false.
*/

const verificarDivididoPorTres = (numero = 0) => numero % 3 === 0 ? true : false

console.log(verificarDivididoPorTres(15))
console.log(verificarDivididoPorTres(27))
console.log(verificarDivididoPorTres(30))
console.log(verificarDivididoPorTres(35))
