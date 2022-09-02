/**
 * Contexto Léxico
 * - Contexto de Declaração
 * - Modo como é declarado
 * - Contexto de execução
 * - Contexto da linguagem
*/

const valor = 'Global' // contexto do arquivo

function minhaFuncao() {
  console.log(valor)
}

function exec() {
  const valor = 'Local' // contexto da função
  minhaFuncao() // Global -> conciência do contexto que foi declarada
}

exec()
