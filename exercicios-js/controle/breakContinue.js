/**
 * break
 * O comando **break** encerra o loop atual, `[switch](https://developer.mozilla.org
 * pt-BR/docs/Web/JavaScript/Reference/Statements/switch)`, ou o loop que foi
 * informado no `[label](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
 * Reference/Statements/label)` e transfere o controle da execução do programa para
 * o comando seguinte.
 * 
 * continue
 * A palavra chave **continue** termina a atual iteração do laço em que ele se
 * encontra ou de um laço rotulado, e continua a execução deste laço com a próxima
 * iteração.
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
  if (x == 5) {
    break
  }
  console.log(`${x} = ${nums[x]}`)
}

for (const y in nums) {
  if (y == 5) {
    continue
  }
  console.log(`${y} = ${nums[y]}`)
}

externo: for (let a in nums) {
  for (let b in nums) {
    if (a == 2 && b == 3) break externo
    console.log(`Par = ${a},${b}`)
  }
}

console.log('Fim!!!!')
