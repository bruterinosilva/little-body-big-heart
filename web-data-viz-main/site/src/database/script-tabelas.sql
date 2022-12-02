create database projeto_cry_baby_DB;
use projeto_cry_baby_DB;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(80),
senha varchar(16)
);

create table postagem (
	idPost int primary key auto_increment,
	titulo varchar(80),
    descricao varchar(140),
	fkUsuario int,
	foreign key (fkUsuario) references usuario (idUsuario)
); 

create table enquete (
idEnquete int primary key auto_increment, 
dtHora datetime default current_timestamp,
album_votado varchar(45),
check (album_votado = 'Dollhouse' or album_votado = 'Cry Baby' or album_votado = 'Cry Baby Extra Clutter' or album_votado = 'K-12' or album_votado = 'After School'),
fkUsuario int,
	foreign key (fkUsuario) references usuario (idUsuario)
);

select * from postagem;
select * from enquete;
select * from usuario;

select count(distinct album_votado) from enquete;

select album_votado, COUNT(album_votado) as 'quantidade_votos' from enquete group by album_votado;







