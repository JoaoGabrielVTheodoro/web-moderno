/**
 * Exemplos Básicos de Funções #01
 *  Funções são:
 *  - Procedimentos
 *  - Podem ou não retornar um resultado
 *  - São definidas pela palavra reservada **function**
 *    - Seguida de um nome → verbo → indica ação
 *    - Parâmetros dentro de parenteses separado por , 
 *    - Bloco de função iniciado com {  seu código…. } 
 *  - Agrupa sentenças de código
 *  - Bloco de código
*/

// função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // Não liga
imprimirSoma() // NaN

// função com retorno
function soma(a, b = 1) {
  return a + b
}

soma(2, 3) // não imprime nada
console.log(soma(2, 3))
console.log(soma(2)) // 2 + b = 1 -> 3
console.log(soma()) // NaN
