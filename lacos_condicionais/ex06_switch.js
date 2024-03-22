/*Com base na tabela abaixo, escreva um algoritmo em Java que 
leia o Nome do Colaborador (String), o Código do Cargo do Colaborador 
(número inteiro de 1 a 6) e o Salário (número float). A seguir, 
mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.*/

const leia = require("readline-sync");

let nomeColaborador,
  codCargoDoColaborador,
  cargo,
  salario,
  reajuste,
  novoSalario;

nomeColaborador = leia.question("Digite o seu nome:");

salario = leia.questionFloat("Digite o seu salário atual: ");

console.log("\n1 - Gerente - Percentual do Reajuste 10%");
console.log("\n2 - Vendedor - Percentual do Reajuste 7%");
console.log("\n3 - Supervisor - Percentual do Reajuste 9%");
console.log("\n4 - Motorista - Percentual do Reajuste 6%");
console.log("\n5 - Estoquista - Percentual do Reajuste 5%");
console.log("\n6 - Técnico de TI - Percentual di Reajuste 8%");

codCargoDoColaborador = leia.questionInt("Digite o código do cargo: ");

switch (codCargoDoColaborador) {
  case 1:
    cargo = "Gerente";
    reajuste = 1.1;
    break;
  case 2:
    cargo = "Vendedor";
    reajuste = 1.07;
    break;
  case 3:
    cargo = "Supervisor";
    reajuste = 1.09;
    break;
  case 4:
    cargo = "Motorista";
    reajuste = 1.06;
    break;
  case 5:
    cargo = "Estoquista";
    reajuste = 1.05;
    break;
  case 6:
    cargo = "Técnico de Ti";
    reajuste = 1.08;
    break;
  default:
    console.log("Digite um código válido!");
}

novoSalario = salario * reajuste;

console.log(
  "Nome colaborador: " +
    nomeColaborador +
    "\nCargo: " +
    cargo +
    "\nSalário atual: " +
    salario +
    "\nSalário com reajuste: " +
    novoSalario
);
