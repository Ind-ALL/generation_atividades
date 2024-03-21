/*Escreva um algoritmo em JavaScript, que leia um número inteiro via teclado 
e mostre na tela uma mensagem indicando se este número é par ou ímpar 
e se o número é positivo ou negativo.*/

const leia = require("readline-sync");

let numero;

numero = leia.questionInt("Digite um número: ");

if (numero % 2 == 0 && numero > 0) {
  console.log("O Número " + numero + " é par e positivo!");
} else if (numero % 2 == 0 && numero < 0) {
  console.log("O Número " + numero + " é par e negativo!");
} else if (numero % 2 == 1 && numero > 0) {
  console.log("O Número " + numero + " é ímpar e positivo!");
} else if (numero % 2 == 1 && numero < 0) {
  console.log("O Número " + numero + " é ímpar e negativo!");
}
