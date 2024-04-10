create database db_rh;

use db_rh;

create table tb_colaboradores(
id bigint auto_increment,
nome varchar(255) not null,
sobrenome varchar(255) not null,
idade int not null,
salario decimal not null,
primary key(id)
);

ALTER TABLE tb_colaboradores MODIFY salario DECIMAL(6,2);

insert into tb_colaboradores(nome, sobrenome, idade, salario) values 
("Bran", "Stark", 22, 1500),
("Arya", "Stark", 25, 3000),
("Cersei", "Lannister", 32, 2000),
("Jon", "Snow", 27, 500),
("Jon", "Arryn", 22, 3500);

select * from tb_colaboradores;

select * from tb_colaboradores where salario > 2000;
select * from tb_colaboradores where salario < 2000;

UPDATE tb_colaboradores SET nome = "John" WHERE Id = 5;