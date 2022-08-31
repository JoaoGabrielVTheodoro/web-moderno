/**
 * Callback
 * - Chamar de volta
 * - Uma função callback é uma função passada a outra função como argumento,
 * que é então invocado dentro da função externa para completar algum tipo de
 * rotina ou ação.
 */

// exemplo de callback no browser
document.getElementsByTagName("body")[0].onclick = function (e) {
  console.log("O evento ocorreu!")
}
