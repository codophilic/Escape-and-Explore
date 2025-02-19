-- create database foodwaste;

-- CREATE DATABASE user_management;
create database escapeandexplore;
USE escapeandexplore;
-- SHOW databases;

 CREATE TABLE user_table (
 id INT AUTO_INCREMENT primary key,      -- Auto-incrementing ID to uniquely identify each registration
   username VARCHAR(100),                  -- Name field (maximum length 100)
   email VARCHAR(100) unique,                     -- Email field
   phone_number VARCHAR(15) unique,                -- Phone number field
   address varchar(200),                            -- Address field
   password varchar(200)   
 );
 
 
 insert into user_table(username,email,phonenumber,address) values
 ('Harsh','hp','1234','abc'), ('Harleen','HP','1234','xyz');
 
 select * from user_table;

  CREATE TABLE user_visits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id varchar(255) NOT NULL,
    place_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 select * from user_visits;
 truncate user_visits;
 create table bookings(
     bookingid INT AUTO_INCREMENT PRIMARY KEY,
     user_id varchar(255) NOT NULL,
         price DECIMAL(10,2),
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    booking_status varchar(20),
    place_to_visit varchar(4000)
 )
 
