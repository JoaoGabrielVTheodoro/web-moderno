/**
 * 11) ​As regras para o cálculo dos anos bissextos são as seguintes:
 * De 4 em 4 anos é ano bissexto;
 * De 100 em 100 anos não é ano bissexto;
 * De 400 em 400 anos é ano bissexto;
 * Prevalecem as últimas regras sobre as primeiras.
 * Partindo daí elabore uma função que recebe um ano e calcula se ele é ano
 * bissexto, imprimindo no console a
 * mensagem e retornando true ou false.
*/

const eAnoBissexto = (ano = 0) => {
  if (ano <= 0) {
    return false
  }

  if (ano % 400 === 0) {
    return true
  }

  if (ano % 100 === 0) {
    return false
  }

  if (ano % 4 === 0) {
    return true
  }

  return false
}

console.log(eAnoBissexto(0))
console.log(eAnoBissexto(4))
console.log(eAnoBissexto(100))
console.log(eAnoBissexto(400))
console.log(eAnoBissexto(800))
console.log(eAnoBissexto(2020))
console.log(eAnoBissexto(2021))
console.log(eAnoBissexto(2022))
console.log(eAnoBissexto(2022))
console.log(eAnoBissexto(2024))
