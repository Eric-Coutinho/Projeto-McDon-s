use master
go

if exists(select * from sys.databases where name = 'Esquizofrenia')
	drop database Esquizofrenia
go

create database Esquizofrenia
go

use Esquizofrenia
go

create table Imagem(
	ID int identity primary key,
	Foto varbinary(MAX) not null,
);
go

create table Usuario(
	ID int identity primary key,
	Nome varchar(80) not null,
	Senha varchar(MAX) not null,
	Salt varchar(200) not null,
	IsAdm bit not null;
);
go

create table Produto(
	ID int identity primary key,
	Nome varchar(100),
	Tipo varchar(80) not null,
	Preco float not null,
	Descricao varchar(200),
	ImagemID int references Imagem(ID) not null,
);
go

create table Promocao(
	ID int identity primary key,
	Preco float not null,
	ProtudoID int references Produto(ID) not null,
);
go

create table Pedido(
	ID int identity primary key,
	Numero int not null,
	Cliente varchar(100),
	Finalizado bit not null,
	Entregue bit not null,
);

create table ProdutoPedido(
	ID int identity primary key,
	ProdutoID int references Produto(ID) not null,
	PedidoID int references Pedido(ID) not null,
);


INSERT INTO Usuario(Nome, Senha)
VALUES ('adm', 'adm');