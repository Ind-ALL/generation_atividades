const leia = require("readline-sync");

let salario, abono, novoSalario;

salario = leia.questionFloat("Digite o salário: ");
abono = leia.questionFloat("Digite o abono: ");
novoSalario = salario + abono;

console.log("Novo salário: " + novoSalario);
