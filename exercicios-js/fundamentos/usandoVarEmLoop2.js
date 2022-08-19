/**
 * Var no For
 * - Mesmo Escopo que o For
 * - Não são locais no Loop
 * Let no For
 * - Locais para declaração
*/

const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })

}

funcs[0]() // 0
funcs[6]() // 6
funcs[8]() // 8
