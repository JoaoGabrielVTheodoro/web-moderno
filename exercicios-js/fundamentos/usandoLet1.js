/**
 * 
 * Let
 * - Limita a variável ao bloco
 * - Variável local
 * - Redeclaração
 *    - Escopo de Bloco
 *      - Causa erro **TypeError**
 *    - Corpo de Função
 *        - Não possui limitação
*/

var numero = 1

{
  let numero = 2 // vai dar preferência
  console.log("dentro = ", numero) // 2
}

console.log("fora = ", numero) // 1
