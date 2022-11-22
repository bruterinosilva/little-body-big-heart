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
qtd_votos_crybaby int,
qtd_votos_k12 int,
qtd_votos_after_school int,
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario)
);

select * from usuario;