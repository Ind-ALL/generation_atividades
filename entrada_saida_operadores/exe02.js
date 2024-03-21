/*Elabore um algoritmo em JavaScript que leia 4 notas de um participante, 
em variáveis do tipo float e exiba na tela a média final do participante.*/

const leia = require("readline-sync");

let nota1, nota2, nota3, nota4, media;

nota1 = leia.questionFloat("Digite a nota 1: ");
nota2 = leia.questionFloat("Digite a nota 2: ");
nota3 = leia.questionFloat("Digite a nota 3: ");
nota4 = leia.questionFloat("Digite a nota 4: ");

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Média final: " + media);
