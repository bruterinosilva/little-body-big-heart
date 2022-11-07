create database projetoCrybaby;
use projetoCrybaby;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(80),
senha varchar(16)
);