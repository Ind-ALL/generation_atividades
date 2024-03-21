/* Faça um algoritmo em JavaScript que leia 3 valores inteiros A, B e C
e imprima na tela se a soma de A + B é maior, menor ou igual a C.*/

const leia = require("readline-sync");

let A, B, C, soma;

A = leia.questionInt("\nDigite o número A: ");
B = leia.questionInt("\nDigite o número B: ");
C = leia.questionInt("\nDigite o número C: ");

soma = A + B;

if (soma > C) {
  console.log("\nA Soma de A + B é Maior do que C");
} else if (soma < C) {
  console.log("\nA Soma de A + B é Menor do que C");
} else {
  console.log("\nA Soma de A + B é Igual a C");
}
