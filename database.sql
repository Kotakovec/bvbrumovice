CREATE DATABASE booking_db;

USE booking_db;

CREATE TABLE apartments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price_per_night DECIMAL(10, 2) NOT NULL
);

CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apartment_id INT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    FOREIGN KEY (apartment_id) REFERENCES apartments(id)
);

-- Vložení testovacích dat
INSERT INTO apartments (name, price_per_night) VALUES
("Luxusní apartmán", 1500),
("Rodinný apartmán", 2000);