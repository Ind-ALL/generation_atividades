/*Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre 
na tela quantos números são pares e quantos número são ímpares.*/

const leia = require("readline-sync");

let numero,
  totalPares = 0,
  totalImpares = 0;

for (i = 1; i <= 10; i++) {
  numero = leia.question("Digite o " + i + "° número: ");

  if (numero % 2 == 0) {
    totalPares++;
  } else {
    totalImpares++;
  }
}

console.log("\nTotal de número pares: " + totalPares);
console.log("\nTotal de número impares: " + totalImpares);
