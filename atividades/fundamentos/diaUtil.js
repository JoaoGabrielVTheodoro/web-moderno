/**
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia
 * inválido dado o número referente ao dia. Considere que domingo é o dia 1 e
 * sábado é o dia 7. Utilize a estrutura Switch.
*/

const eDiaUtil = (dia = 1) => {
  switch (dia) {
    case 1:
    case 7:
      console.log('Fim de semana!')
      break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log('Dia Útil!')
      break
    default:
      console.log('Dia Inválido!')
      break
  }
}

eDiaUtil(1) // dom -> Fim de semana!
eDiaUtil(2) // seg -> Dia Útil!
eDiaUtil(3) // ter -> Dia Útil!
eDiaUtil(4) // qua -> Dia Útil!
eDiaUtil(5) // qui -> Dia Útil!
eDiaUtil(6) // sex -> Dia Útil!
eDiaUtil(7) // sab -> Fim de semana!
