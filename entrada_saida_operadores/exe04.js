/*Leia quatro valores float (n1, n2, n3, n4). A seguir, 
calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4.*/

const leia = require("readline-sync");

let n1, n2, n3, n4, diferenca;

n1 = leia.questionFloat("Digite o número 1: ");
n2 = leia.questionFloat("Digite o número 2: ");
n3 = leia.questionFloat("Digite o número 3: ");
n4 = leia.questionFloat("Digite o número 4: ");

diferenca = n1 * n2 - n3 * n4;

console.log("Diferença = " + diferenca);
