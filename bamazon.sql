CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INTEGER NOT NULL auto_increment PRIMARY KEY,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price INTEGER(255) NOT NULL,
stock_quantity INTEGER(255) NOT NULL,
);