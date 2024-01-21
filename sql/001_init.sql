CREATE DATABASE app_db;

CREATE TABLE cowboys (
    name varchar (30) not null unique
);

insert into cowboys values ('Pablo');

CREATE USER app WITH ENCRYPTED PASSWORD 'pass';
GRANT ALL PRIVILEGES ON DATABASE app_db TO app;