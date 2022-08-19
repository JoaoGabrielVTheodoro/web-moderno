/**
 * Notação Ponto
 * - Acessar membro de funções e objetos utilizando ponto
*/

console.log(Math.ceil(6.1)) // eleva para cima

const obj1 = {}

obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // array associativo

console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome
  this.exec = function () {
    console.log('Exec....')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
