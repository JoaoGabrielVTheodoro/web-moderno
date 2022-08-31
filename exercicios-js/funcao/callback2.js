/**
 * Callback
 * - Chamar de volta
 * - Uma função callback é uma função passada a outra função como argumento,
 * que é então invocado dentro da função externa para completar algum tipo de
 * rotina ou ação.
 */

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
let notasBaixas = []

for (const i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

// com callback
notasBaixas = notas.filter(function (nota) {
  return nota < 7
})

console.log(notasBaixas)

const notasMenorQueSete = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQueSete)

console.log(notasBaixas3)
