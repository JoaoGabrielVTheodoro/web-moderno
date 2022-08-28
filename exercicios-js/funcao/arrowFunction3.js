/**
 * Função Arrow
 * - Não possui a existência de um this
 * - This ligado ao contexto lexico
*/

let comparaComThis = function (param) {
  console.log(param === this)
}

comparaComThis(global) // true -> contexto do nodejs

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false -> this => obj
comparaComThis(obj) // true

let comparaComThisArrow = (param) => console.log(param === this)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true -> contexto do módulo (arquivo)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false -> não muda o this -> sempre aponta para o contexto de escrita
comparaComThisArrow(module.exports) // true -> contexto do módulo (arquivo)
