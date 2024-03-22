/*Com base na tabela abaixo, escreva um algoritmo em Java que leia o código 
de um item (número inteiro de 1 a 6) e a quantidade comprada deste item (número inteiro). 
A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.*/

const leia = require("readline-sync");

let codigoProduto, quantidade, produto, valorTotal;

console.log("\n1 - Cachorro Quente - R$10.00");
console.log("\n2 - X-Salada - R$15.00");
console.log("\n3 - X-Bacon - R$18.00");
console.log("\n4 - Bauru - R$12.00");
console.log("\n5 - Refrigerante - R$8.00");
console.log("\n6 - Suco de laranja - R$13.00");

codigoProduto = leia.questionInt("Digite o código do produto: ");

switch (codigoProduto) {
  case 1:
    preco = 10;
    produto = "Cachorro quente";
    break;
  case 2:
    preco = 15;
    produto = "X-Salada";
    break;
  case 3:
    preco = 18;
    produto = "X-Bacon";
    break;
  case 4:
    preco = 12;
    produto = "Bauru";
    break;
  case 5:
    preco = 8;
    produto = "Refrigerante";
    break;
  case 6:
    preco = 13;
    produto = "Suco de laranja";
    break;
  default:
    console.log("Digite um código de produto válido!");
}

quantidade = leia.questionInt("Quantos produtos irá querer: ");

valorTotal = quantidade * preco;

console.log("Produto escolhido: " + produto);
console.log("Valor total: R$" + valorTotal);
