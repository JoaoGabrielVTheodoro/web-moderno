/**
 * Parâmetros e Retorno São Opcionais
 * - Por padrão os parâmetros são undefined
 * - Você pode configurar o parâmetro padrão com um valor default
 * - Retorno Opcional
 * - Pode se passar uma quantidade vasta de parâmetros
 */

function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m²`)
  } else {
    return area
  }
}

console.log(area(2, 2))
console.log(area(2, undefined))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5)) // cuidado ao usar !!!!
