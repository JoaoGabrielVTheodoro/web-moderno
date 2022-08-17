/**
 * Var no For
 * - Mesmo Escopo que o For
 * - Não são locais no Loop
 * Let no For
 * - Locais para declaração
*/

for (var i = 0; i < 10; i++) {
  console.log(i)
}

console.log("i = ", i) // 10 -> valor que saiu do laço
