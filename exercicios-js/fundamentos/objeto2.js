/**
 * Objeto
 * - Conjunto chave/valor
 * - Variáveis ligadas ao objeto são propriedades
 * - Acessamos as propriedades por meio da notação .
 * - Podemos criar um objeto de forma literal, com funções construtoras e Object initializer
 * Função
 * - Toda Função é um objeto Function
 * - Funções retornão valores
 * - Procedimentos não retornam nada
 * - Possui parâmetros
*/

console.log(typeof Object) // function
console.log(typeof new Object) // object

const Cliente = function () { }

console.log(typeof Cliente) // function
console.log(typeof new Cliente) // object

class Produto { } // ES 2015 (ES6) 
console.log(typeof Produto) // function
console.log(typeof new Produto) // object
