CREATE DATABASE flights_db;

USE flights_db;

CREATE TABLE quotes (
    id INT NOT NULL AUTO_INCREMENT,
    price DECIMAL (10,2) NOT NULL,
    direct BOOLEAN NOT NULL,
    outbound_carrierId INT(10) NOT NULL,
    outbound_originId INT(10) NOT NULL,
    outbound_destinationId INT(10) NOT NULL,
    outbound_departure DATETIME NOT NULL,
    inbound_carrierId INT(10) NOT NULL,
    inbound_originId INT(10) NOT NULL,
    inbound_destinationId INT(10) NOT NULL,
    inbound_departure DATETIME NOT NULL,
    quote_date DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE places (
    id INT NOT NULL AUTO_INCREMENT,
    placeId INT(10) NOT NULL,
    iata_code VARCHAR(5) NOT NULL,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    skyscanner_code VARCHAR(5) NOT NULL,
    city_name VARCHAR(100) NOT NULL,
    city_id VARCHAR(5) NOT NULL,
    country_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE carriers (
    id INT NOT NULL AUTO_INCREMENT,
    carrier_id INT(10) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
