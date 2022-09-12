/**
 * 17) Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo:
 * Plano Aumento
 * A     10%
 * B     15%
 * C     20%
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
 * novo salário. Use a estrutura switch e faça um caso default que indique que
 * o plano é inválido.
 */

const getSalarioConformePlano = (plano = "A", valorSalario = 0) => {
  let resultado = 0;
  switch (plano) {
    case "A":
      resultado = valorSalario + valorSalario * 0.1;
      break;
    case "B":
      resultado = valorSalario + valorSalario * 0.15;
      break;
    case "C":
      resultado = valorSalario + valorSalario * 0.2;
      break;
    default:
      resultado = valorSalario;
      console.log(`Plano inválido`);
      break;
  }

  return resultado;
};

const novoSalarioPlanoA = getSalarioConformePlano("A", 2000);
console.log(`Novo Valor do Salário A : R$ ${novoSalarioPlanoA}`);

const novoSalarioPlanoB = getSalarioConformePlano("B", 2000);
console.log(`Novo Valor do Salário B : R$ ${novoSalarioPlanoB}`);

const novoSalarioPlanoC = getSalarioConformePlano("C", 2000);
console.log(`Novo Valor do Salário C : R$ ${novoSalarioPlanoC}`);

const novoSalarioPlanoD = getSalarioConformePlano("D", 2000);
console.log(`Novo Valor do Salário D : R$ ${novoSalarioPlanoD}`);
