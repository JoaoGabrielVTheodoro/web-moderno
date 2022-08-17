/**
 * 
 * Var
 *  - Pode Haver sobrescrita, estão no mesmo escopo
 *  - Fora da função ela não fica restrito ao bloco
*/

var numero = 1

{
  var numero = 2 // sobrescrita
  console.log("dentro = ", numero)
}

console.log("fora = ", numero)
