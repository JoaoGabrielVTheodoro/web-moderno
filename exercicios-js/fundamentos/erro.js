/**
 * try...catch
 * As declarações **try...catch** marcam um bloco de declarações para testa
 * (**try**),  e especifica uma resposta, caso uma exceção seja lançada.
 * 
 * Throw
 * A **declaração** **`throw`** lança uma exceção definida pelo usuário. A execução da
 * função atual vai parar (as instruções após o `throw` não serão executadas), e o
 * controle será passado para o primeiro bloco `[catch](https://developer.mozilla.org
 * en-US/docs/Web/JavaScript/Reference/Statements/try...catch)` na pilha de chamadas.
 * Se nenhum bloco `catch`existe entre as funções "chamadoras", o programa vai terminar.
*/

function tratarErroLancado(erro) {
  // throw new Error('...')
  // throw 10
  // throw 'mensagem'
  throw {
    nome: erro.name,
    mensagem: erro.message,
    date: new Date
  }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!!')
  } catch (erro) {
    tratarErroLancado(erro)
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'Roberto' }

imprimirNomeGritado(obj)
