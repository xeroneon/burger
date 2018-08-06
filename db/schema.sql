DROP DATABASE IF EXISTS burgers_DB;

CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
    id int not null auto_increment,
    burger_name varchar(30) not null,
    devoured boolean not null,
    primary key (id)
)