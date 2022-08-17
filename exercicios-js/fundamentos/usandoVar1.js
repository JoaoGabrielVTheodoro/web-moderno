/**
 * Var
 * - Aplicada ao contexto que foi declarada
 *   - Function
 *   - Global
 *   - Object 
 * - Não declaradas automaticamente são globais 
*/

{
  {
    {
      {
        var sera = "Será????"// que não seja dentro uma função -> será visivél
      }
    }
  }
}

console.log(sera)

function teste() {
  var local = 123
  console.log(local)
}

teste()
// console.log(local) // ReferenceError: local is not defined
