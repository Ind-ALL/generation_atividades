CREATE DATABASE db_generation_game_online;

USE db_generation_game_online;

CREATE TABLE tb_classes(
Id BIGINT NOT NULL AUTO_INCREMENT,
nome_classe VARCHAR(100),
PRIMARY KEY(id)
);

INSERT INTO tb_classes(nome_classe)
VALUE 
("Dobrador de Água"),
("Dobrador de Terra"),
("Dobrador de Fogo"),
("Dobrador de Ar");

SELECT * FROM  tb_classes;

CREATE TABLE tb_personagens(
id BIGINT NOT NULL AUTO_INCREMENT,
nome VARCHAR(150),
ataque int,
defesa int,
classe_id BIGINT,
PRIMARY KEY(id),
FOREIGN KEY(classe_id) REFERENCES tb_classes(id)
);

INSERT INTO tb_personagens(nome, ataque, defesa, classe_id) 
VALUES
("Aang", 7000, 7000, 4),
("Zuko", 6000, 5000, 3),
("Katara", 500, 100, 1),
("Toph", 9000, 9500, 2),
("Zhao", 5000, 1500, 3),
("Chey", 400, 1700, 3);

SELECT * FROM tb_personagens;

SELECT * FROM tb_personagens WHERE ataque > 2000;
SELECT * FROM tb_personagens WHERE defesa BETWEEN 1000 AND 2000;
SELECT * FROM tb_personagens WHERE nome LIKE "%C%";

SELECT tb_personagens.nome, tb_personagens.ataque, tb_personagens.defesa, tb_classes.nome_classe
FROM tb_personagens
INNER JOIN tb_classes
ON tb_personagens.classe_id = tb_classes.id;

SELECT tb_personagens.nome, tb_classes.nome_classe
FROM tb_personagens
INNER JOIN tb_classes
ON tb_personagens.classe_id = tb_classes.id
WHERE tb_classes.nome_classe = "Dobrador de Fogo";



