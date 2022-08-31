/**
 * Funções Construtoras
 * - São como classes em java
 * - Usamos new para criar um objeto a partir da função construtora
 * - Usa-se o this dentro da função
 * - Um molde do objeto
 *   - Atributos
 *   - Métodos
 */

function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0

  // método publico
  this.acelerar = () => {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  // método publico
  this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // Function
console.log(typeof ferrari) // object
