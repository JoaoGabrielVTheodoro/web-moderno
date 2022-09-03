/**
 * 08) ​Pedro joga N jogos de
 * basquete por temporada. Para
 * saber como está ele está
 * progredindo, ele mantém
 * registro de todos os as
 * pontuações feitas por jogo. Após
 * cada jogo ele anota no novo valor
 * e confere se o
 * mesmo é maior ou menor que seu melhor e pior desempenho.
 * Dada uma lista string = “pontuação1 pontuação2
 * pontuação3 etc..”, escreva uma
 * função que ao recebê-la irá
 * comparar os valores um a um e irá
 * retornar um
 * vetor com o número de vezes que
 * ele bateu seu recorde de maior
 * número de pontos e quando fez seu
 * pior jogo. (Número do pior jogo).
*/
let stringPontuacao = '10, 20, 20, 8, 25, 3, 0, 30, 1';

const avaliaPontuacao = (stringPontuacao) => {
  let pontuacao = stringPontuacao.split(', ');
  let qtdQuebraRecordes = 0;
  let piorJogo = 1;
  let maiorPontuacao = pontuacao[0];
  let menorPontuacao = pontuacao[0];

  for (let i = 1; i < pontuacao.length; i++) {
    if (pontuacao > maiorPontuacao) {
      maiorPontuacao = pontuacao[i];
      qtdQuebraRecordes++;
    } else if (pontuacao < menorPontuacao) {
      menorPontuacao = pontuacao[i];
      piorJogo = i + 1;
    }
  }
  return [qtdQuebraRecordes, piorJogo]
}

console.log(avaliaPontuacao(stringPontuacao));
