create database db_escola;

use db_escola;

create table tb_alunos(
id bigint auto_increment,
nome varchar(255) not null,
sobrenome varchar(255) not null,
idade int not null,
nota decimal(4,2) not null,
primary key(id)
);

insert into tb_alunos(nome, sobrenome, idade, nota) values 
("Bran", "Stark", 22, 7.5),
("Arya", "Stark", 25, 4.2),
("Cersei", "Lannister", 32, 9.8),
("Jon", "Snow", 27, 6.7),
("Sansa", "Stark", 23, 8),
("Cão", "de Caça", 48, 2.5),
("Jaime", "Lannister", 32, 7),
("Jon", "Arryn", 22, 10);

select * from tb_alunos;

select * from tb_alunos where nota > 7.0;
select * from tb_alunos where nota < 7.0;

UPDATE tb_alunos SET nota = 10 WHERE Id = 4;
