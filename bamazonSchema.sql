DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50),
    department_name VARCHAR (50),
    price DECIMAL (10,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('4qt Pot', 'Cookware', 46.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('36pc Silverware Set', 'Utensils', 25.87, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pot Holders', 'Cookware Accessories', 15.26, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Dutch Oven', 'Cookware', 75.11, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Sautee Pan', 'Cookware', 29.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Spatula', 'Utensils', 5.84, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Cooling Rack', 'Cookware Accessories', 16.07, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Cook Book', 'Cooking Guides', 10.38, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('5pc Set Serving Silverware', 'Utensils', 28.66, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('10pc Cookware Set', 'Cookware', 101.02, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Salt & Pepper Shaker Set', 'Accessories', 8.29, 7);


