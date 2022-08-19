/**
 * Operadores: Destructuring #01
 * - A sintaxe de **atribuição via desestruturação (destructuring assignment)** é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas
 * - Tirar da estrutura
 * - Funciona com arrays e objetos
 * - Para desestruturar um objeto usa-se {}
 * - Para desestruturar um array usa-se []
 * - ES6 - 2015
*/

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000,
  }
}

const { nome, idade } = pessoa // tire do objeto pessoa -> nome, idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome = 'Normal', bemHumorada = true } = pessoa // valores padrões
console.log(sobrenome, bemHumorada) // Normal true

const { endereco: {
  logradouro,
  numero,
  cep = '1000-000'
} } = pessoa

console.log(logradouro, numero, cep)

// const { conta: {
//   agencia,
//   numero
// } } = pessoa

// console.log(agencia, numero) // Cannot read properties of undefined (reading 'agencia')