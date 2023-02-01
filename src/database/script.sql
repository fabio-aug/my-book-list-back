CREATE DATABASE IF NOT EXISTS MyBookList;
USE MyBookList;

CREATE TABLE IF NOT EXISTS User (
	idUser INT NOT NULL AUTO_INCREMENT,
	photo TEXT,
	nickname VARCHAR(30),
	nationality VARCHAR(30),
	name VARCHAR(80) NOT NULL,
	dateOfBirth DATE NOT NULL,
	email VARCHAR(80) NOT NULL,
	phone VARCHAR(30) NOT NULL,
	password VARCHAR(20) NOT NULL,

	PRIMARY KEY (idUser)
);

CREATE TABLE IF NOT EXISTS Book (
	idBook INT NOT NULL AUTO_INCREMENT,
	photo TEXT,
	name VARCHAR(45) NOT NULL,
	author VARCHAR(45) NOT NULL,
	publisher VARCHAR(45) NOT NULL,
	dateOfPublication DATE NOT NULL,
	synopsis VARCHAR(1000) NOT NULL,

	PRIMARY KEY (idBook)
);

CREATE TABLE IF NOT EXISTS Review (
	idUser INT NOT NULL,
	idBook INT NOT NULL,
	score INT NOT NULL,
	note VARCHAR(1000),
	status INT NOT NULL,

	PRIMARY KEY (idUser, idBook),
	FOREIGN KEY (idUser) REFERENCES User (idUser),
	FOREIGN KEY (idBook) REFERENCES Book (idBook)
);

CREATE TABLE IF NOT EXISTS Friendship (
	idUser1 INT NOT NULL,
	idUser2 INT NOT NULL,
	dateOfFriendship DATETIME NOT NULL,

	PRIMARY KEY (idUser1, idUser2),
	FOREIGN KEY (idUser1) REFERENCES User (idUser),
	FOREIGN KEY (idUser2) REFERENCES User (idUser)
);

CREATE TABLE IF NOT EXISTS Favorite (
	idUser INT NOT NULL,
    idBook INT NOT NULL,
    PRIMARY KEY (idUser, idBook),
    FOREIGN KEY (idUser) REFERENCES User (idUser),
    FOREIGN KEY (idBook) REFERENCES Book (idBook)
);
