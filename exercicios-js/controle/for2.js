/**
 * FOR/IN
 * - Itera sobre propriedades distintas de um objeto
 * - Laço pode ser usado para cada propriedade distinta de um objeto
 *    - variável
 *      - Dinâmica
 *      - Atribuída para cada iteração
 * - objeto
 *      - Objeto com propriedades a serem iteradas
*/

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
  console.log(`Nota ${i} = ${notas[i]}`)
}

const pessoa = {
  nome: 'Ana',
  sobreNome: 'Silva',
  idade: 29,
  peso: 64
}

for (let atributo in pessoa) {
  console.log(`pessoa.${atributo} = ${pessoa[atributo]}`)
}
