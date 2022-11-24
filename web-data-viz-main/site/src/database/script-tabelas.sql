create database projeto_cry_baby_DB;
use projeto_cry_baby_DB;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(80),
senha varchar(16)
);

create table quiz (
idQuiz int primary key auto_increment, 
dtHora datetime default current_timestamp,
acertos char(4),
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario)
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
check (album_votado = 'Dollhouse' or album_votado = 'Cry Baby' or album_votado = 'Cry Baby Extra Clutter' or album_votado = 'K-12' or album_votado = 'After School')
);

select * from usuario;
select count(distinct album_votado) from enquete;
select album_votado, COUNT(album_votado) from enquete group by album_votado;

select * from enquete;

select count(album_votado) from enquete;

INSERT INTO enquete VALUES 
        (null, default, 'Cry Baby');
select * from enquete;

