# Book Store Project - Back
### NodeJs Express with mySql database

## How to start

`git clone https://github.com/silviafer-dev/BookStore-back.git`

## Install dependency 
`npm install`

Add your access user and password with a database name to env.js file to connect to the database and fill it with data

## Run the app
`npm start` open the browse in "http://localhost:4000"

## MODELS MYSQL DATABASE 'bookstore'

### AUTHORS
CREATE TABLE authors(id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY, first_name: VARCHAR(255) NOT NULL,last_name: VARCHAR(255) NOT NULL); 

### BOOKS
CREATE TABLE books(id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name: VARCHAR(255) NOT NULL, isbn: VARCHAR(20) NOT NULL, author: INT NULL, CONSTRAINT ida_b FOREIGN KEY(author) REFERENCES author(id) ON UPDATE CASCADE ON DELETE SET NULL); 