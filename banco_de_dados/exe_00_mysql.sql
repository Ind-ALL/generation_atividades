-- Criar o Banco de dados
create database db_quitando;

-- Selecionando o Banco de Dados
use db_quitando;

-- Criando nossa primeira Tabela
create table tb_produtos(
 id bigint auto_increment,
 nome varchar(255) not null,
 quantidade int,
 preco decimal not null,
 primary key(id)
);

-- Selecionando dados da Tabela
select * from tb_produtos;

-- Inserindo dados na Tabela
insert into tb_produtos(nome,quantidade,preco) values ("brócolis",20,5);
insert into tb_produtos(nome,quantidade,preco) values ("morango",40,9.99);
insert into tb_produtos(nome,preco) values ("ameixa",5);
INSERT INTO tb_produtos(nome, quantidade, preco) 
VALUES ("tomate",100, 8.00);
INSERT INTO tb_produtos(nome, quantidade,  preco) 
VALUES ("maçã",20, 5.00);
INSERT INTO tb_produtos(nome, quantidade,  preco) 
VALUES ("laranja",50, 10.00);
INSERT INTO tb_produtos(nome, quantidade,  preco) 
VALUES ("banana",200, 12.00);
INSERT INTO tb_produtos(nome, quantidade,  preco) 
VALUES ("uva",1200, 30.00);
INSERT INTO tb_produtos(nome, quantidade, preco) 
VALUES ("abacaxi",500, 2000.99);

-- Selecionando dados da Tabela com critérios de filtragem
select nome, preco, quantidade from tb_produtos;

select * from tb_produtos where nome = "tomate"; -- Operadores Relacionais

SELECT * FROM tb_produtos WHERE preco > 5.00 and quantidade < 100;  -- Operadores Lógicos


select * from tb_produtos;


-- DDL Modificando a Estrutura da Tabela

ALTER TABLE tb_produtos MODIFY preco DECIMAL(6,2); -- Modificando a estrutura de uma Coluna

ALTER TABLE tb_produtos DROP quantidade; -- Excluindo uma Coluna

DROP DATABASE db_quitando; -- Apagar um Banco de dados


-- DML Atualizar e deletar
UPDATE tb_produtos SET preco = 9.99 WHERE Id = 6; -- Atualizando dados na Tabela

DELETE FROM tb_produtos where nome = "abacaxi"; -- Apagando dados na Tabela


-- Definição dos esquemas 
describe tb_produtos; 



SET SQL_SAFE_UPDATES = 0;