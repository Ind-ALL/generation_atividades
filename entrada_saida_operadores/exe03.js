/*Elabore um algoritmo em JavaScript, que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, em variáveis do tipo float e exiba na tela o Salário Líquido.*/

const leia = require("readline-sync");

let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido;

salarioBruto = leia.questionFloat("Digite o salário bruto: ");
adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ");
horasExtras = leia.questionFloat("Digite as horas extras: ");
descontos = leia.questionFloat("Digite os descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + horasExtras * 5 - descontos;

console.log("O salário líquido foi de: " + salarioLiquido);
