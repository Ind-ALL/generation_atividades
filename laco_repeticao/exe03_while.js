/*Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros),
via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos 
e o total de pessoas cuja idade seja maior que 50 anos. A leitura dos dados deve 
ser finalizada ao digitar uma idade negativa.*/

const leia = require("readline-sync");

let idade = 0,
  menores21 = 0,
  maiores50 = 0;

while (idade >= 0) {
  idade = leia.questionInt("Digite uma idade: ");

  if (idade > 0 && idade < 21) {
    menores21++;
    ("");
  }

  if (idade > 50) {
    maiores50++;
  }
}

console.log("\nTotal de pessoas menores de 21 anos: " + menores21);
console.log("\nTotal de pessoas maiores de 50 anos: " + maiores50);
