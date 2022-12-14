/**
 * Operadores Lógicos
 * - Retornam true ou false
 * - Operadores:
 *   - && (AND) ou (E)
 *   - || (OR) ou (OU)
 *   -  ! (NOT) ou (NEGAÇÃO)
 * - Se forem comparados valores não buleanos um dos valores
 * é retornado
 * ---------------------------------------------------------
 * -                   TABELA VERDADE                      -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -                        AND                             -
 * ---------------------------------------------------------
 * -     COND 1     |         COND 2       |  RESULTADO    -             
 * ---------------------------------------------------------
 * -     TRUE       |         FALSE        |    FALSE      -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -     FALSE      |         TRUE         |    FALSE      -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -     FALSE      |         FALSE        |    FALSE      -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -     TRUE       |         TRUE         |     TRUE      -
 * ---------------------------------------------------------
 * 
 * ---------------------------------------------------------
 * -                         OR                             -
 * ---------------------------------------------------------
 * -     COND 1     |         COND 2       |  RESULTADO    -             
 * ---------------------------------------------------------
 * -     TRUE       |         FALSE        |    TRUE       -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -     FALSE      |         TRUE         |    TRUE       -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -     FALSE      |         FALSE        |    FALSE      -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -     TRUE       |         TRUE         |     TRUE      -
 * ---------------------------------------------------------
 * 
 * ---------------------------------------------------------
 * -                       XOR                             -
 * ---------------------------------------------------------
 * -     COND 1     |         COND 2       |  RESULTADO    -             
 * ---------------------------------------------------------
 * -     TRUE       |         FALSE        |    TRUE       -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -     FALSE      |         TRUE         |    TRUE       -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -     FALSE      |         FALSE        |    FALSE      -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -     TRUE       |         TRUE         |     FALSE     -
 * ---------------------------------------------------------
 * 
 * ---------------------------------------------------------
 * -                       NOT                             -
 * ---------------------------------------------------------
 * -     COND 1     |   RESULTADO                          -             
 * ---------------------------------------------------------
 * -     TRUE       |   FALSE                              -
 * ---------------------------------------------------------
 * ---------------------------------------------------------
 * -     FALSE      |   TRUE                               -
 * ---------------------------------------------------------
*/

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2 // OR -> se um der certo -> compra sorvete
  const comprarTv50 = trabalho1 && trabalho2 // AND -> se um de ambos for falso não compro a tv de 50 -> operadores de curto circúito
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // XOR
  const comprarTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete // operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}


console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

