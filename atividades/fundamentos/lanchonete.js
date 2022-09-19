/**
 * 19) O cardápio de uma lanchonete é o seguinte:
 * Código Descrição do Produto Preço
 * 100    Cachorro Quente      R$ 3,00
 * 200    Hambúrguer Simples   R$ 4,00
 * 300    Cheeseburguer        R$ 5,50
 * 400    Bauru                R$ 7,50
 * 500    Refrigerante         R$ 3,50
 * 600    Suco                 R$ 2,80
 * Implemente uma função que receba como parâmetros o código do item pedido, a
 * quantidade e calcule o valor a ser pago por aquele lanche. Considere que a
 * cada execução somente será calculado um item. Use o comando switch. Crie um
 * caso default para produto não existente.
*/

const efetuarCompraDeLanche = (codigoLanche = 100, quantidade = 0) => {
  switch (codigoLanche) {
    case 100:
      console.log('100 - Cachorro Quente (R$ 3,00)')
      console.log(`Valor Total da compra de ${quantidade} Cachorro Quente: R$ ${(quantidade * 3).toFixed(2)}`)
      break
    case 200:
      console.log('200 - Hambúrguer Simples (R$ 4,00)')
      console.log(`Valor Total da compra de ${quantidade} Hambúrguer Simples: R$ ${(quantidade * 4).toFixed(2)}`)
      break
    case 300:
      console.log('300 - Cheeseburguer (R$ 5,50)')
      console.log(`Valor Total da compra de ${quantidade} Cheeseburguer: R$ ${(quantidade * 5.5).toFixed(2)}`)
      break
    case 400:
      console.log('400 - Bauru (R$ 7,50)')
      console.log(`Valor Total da compra de ${quantidade} Bauru: R$ ${(quantidade * 7.5).toFixed(2)}`)
      break
    case 500:
      console.log('500 - Refrigerante (R$ 3,50)')
      console.log(`Valor Total da compra de ${quantidade} Refrigerante: R$ ${(quantidade * 3.5).toFixed(2)}`)
      break
    case 600:
      console.log('600 - Suco (R$ 2,80)')
      console.log(`Valor Total da compra de ${quantidade} Suco: R$ ${(quantidade * 2.8).toFixed(2)}`)
      break
    default:
      console.log('Código de Lanche Fornecido inválido :(')
      break
  }
}

efetuarCompraDeLanche(100, 1)
efetuarCompraDeLanche(200, 2)
efetuarCompraDeLanche(300, 3)
efetuarCompraDeLanche(400, 4)
efetuarCompraDeLanche(500, 5)
efetuarCompraDeLanche(600, 6)
efetuarCompraDeLanche(700, 7) // Código de Lanche Fornecido inválido :(
