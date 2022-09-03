/**
 * 06)​ Elabore duas funções que
 * recebem três parâmetros: capital
 * inicial, taxa de juros e tempo de
 * aplicação. A
 * primeira função retornará o
 * montante da aplicação financeira
 * sob o regime de juros simples e a
 * segunda
 * retornará o valor da aplicação
 * sob o regime de juros compostos.
*/

const jurosSimples = (capital = 0, taxa = 0, tempo = 0) => capital + (capital * taxa * tempo).toFixed(2)

const jurosComposto = (capital = 0, taxa = 0, tempo = 0) => (capital * (1 + taxa) ** tempo).toFixed(2)

console.log(jurosSimples(100, 10 / 100, 2))
console.log(jurosComposto(100, 10 / 100, 2))
