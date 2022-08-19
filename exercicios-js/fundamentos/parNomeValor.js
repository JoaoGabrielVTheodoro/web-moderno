/**
 * Gramática léxico
 * 
 * O código fonte de um script ECMAScript é lido da esquerda para direita e
 * traduzido em uma sequência de elementos de entrada, como símbolos, caracteres
 * de controle, finalizadores de linha, comentários ou espaços em branco
 * ECMAScript também define certas palavras-chave e literais e possui regras
 * para inserção automática de ponto e vírgula ao final de 
 * declarações.
 * 
 * Contexto de execução
 * 
 * Quando o controle é transferido para o código executável ECMAScript, o
 * controle está entrando em um contexto de execução. Os contextos de execução
 * ativos formam logicamente uma pilha. O contexto de execução superior nesta
 * pilha lógica é o contexto de execução em execução. Um novo contexto de
 * execução é criado sempre que o controle é transferido do código executável
 * associado ao contexto de execução atualmente em execução para o código
 * executável que não está associado a esse contexto de execução. O contexto de
 * execução recém-criado é colocado na pilha e se torna o contexto de execução
 * em execução.
 * 
 * Um contexto de execução contém qualquer estado necessário para rastrear o
 * progresso da execução de seu código associado. Além disso, cada contexto de
 * execução possui os componentes de estado listados na Tabela 19.
*/

var saudacao = 'Opa' // contexto léxico 1

function exec() {
  var saudacao = 'Fala' // contexto léxico 2
  return saudacao
}

// const saudacao = 'Epa' // SyntaxError: Identifier 'saudacao' has already been declared


// Objetos são grupos aninhados de pares nome/valor

const cliente = {
  nome: 'João',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
