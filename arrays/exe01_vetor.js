/*Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário 
irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. 
Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.*/

const leia = require("readline-sync");

let numero,
  numerosVetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log(numerosVetor);

numero = leia.questionInt("\nDigite o número que você deseja encontrar: ");

for (let i = 0; i <= numerosVetor.length; i++) {
  if (numero == numerosVetor[i]) {
    console.log("O número " + numero + " está localizado na posição: " + i);
  } else if (numero > numerosVetor.length) {
    console.log("O número " + numero + " não foi encontrado!");
  }
}
