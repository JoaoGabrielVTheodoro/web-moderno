/**
 * Função
 * - First-Class Object (Citizens)
 * - Cidadão primeira Linha:
 *   - Trata função como dado
 * - Higher-order function
 *   - Programação Funcional  
 * - Bloco é obrigatório na forma literal
*/

// Forma Literal de Declarar função
function fun1() { }

// Armazenar Função em Variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Aramazenar em um Atributo de Objeto
const obj = {
  falar: function () {
    return 'Opa'
  }
}

console.log(obj.falar())

// Passar função como param
function run(fun) {
  fun()
}

run(function () {
  console.log('Executando....')
})

// Uma Função pode retornar/conter uma Função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)

