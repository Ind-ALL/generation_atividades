/*Escreva um algoritmo, que leia números inteiros via teclado, 
até que o número zero seja digitado. Ao final, mostre na tela
a soma de todos os números digitados, que sejam positivos.*/

const leia = require("readline-sync");

let numero,
  numeroPositivo = 0,
  soma = 0;

do {
  numero = leia.questionInt("Digite um número: ");

  if (numero > 0) {
    numeroPositivo += numero;
  }
} while (numero !== 0);

console.log("\nA soma dos números positivos é: " + numeroPositivo);
