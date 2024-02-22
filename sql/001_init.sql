CREATE DATABASE app_db;
CREATE SCHEMA app;

CREATE USER app WITH ENCRYPTED PASSWORD 'pass';
GRANT ALL PRIVILEGES ON DATABASE app_db TO app;
GRANT ALL ON SCHEMA app TO app;

CREATE TABLE app.cowboys (
    name varchar (30) not null unique
);
grant all on cowboys to app;

insert into cowboys values ('Pablo');

