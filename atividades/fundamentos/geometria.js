/**
 * 2) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais
 * Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e
 * retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições
 * matemáticas de existência de um
 * triângulo).
*/

function comparaLadosTriangulo(x = 0, y = 0, z = 0) {
  if (x === y && x === z) {
    return 'Equilátero'
  }

  if (x === y || x === z || y === x || y === z || z === x || z === y) {
    return 'Isoceles'
  }

  if (x !== y && x !== z) {
    return 'Escaleno'
  }
}

console.log(comparaLadosTriangulo(3, 3, 3)) // Equilátero
console.log(comparaLadosTriangulo(3, 2, 2)) // Isoceles
console.log(comparaLadosTriangulo(3, 1, 2)) // Escaleno
