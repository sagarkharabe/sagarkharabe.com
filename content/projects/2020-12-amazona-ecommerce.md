---
model: project
title: Amazona Ecommerce
subtitle: ' Fully functional E-commerce application on MERN stack'
description: >-
  E-commerce is the activity of buying or selling online. Electronic commerce
  draws on technologies such as mobile commerce, electronic funds transfer,
  supply chain management, Internet marketing, online transaction processing,
  electronic data interchange (EDI), inventory management systems, and automated
  data collection systems.
path: amazona-ecommerce
image: ../images/screenshot-2020-12-12-at-9.37.56-pm.png
images:
  - description: Homepage
    image: ../images/screenshot-2020-12-12-at-9.37.56-pm.png
  - description: Product Details
    image: ../images/screenshot-2020-12-12-at-9.39.39-pm.png
  - description: Cart View
    image: ../images/screenshot-2020-12-12-at-9.40.36-pm.png
  - description: Seller Dashboard
    image: ../images/screenshot-2020-12-12-at-9.46.13-pm.png
  - description: Add new product
    image: ../images/screenshot-2020-12-12-at-9.46.30-pm.png
date: 2020-08-01T16:26:35.236Z
finished: true
published: true
style: doble-column
tags:
  - Ecommerce
  - WebApp
roles:
  - Fullstack Developer
stack:
  - MERN
client: Personal
repository: 'https://github.com/sagarkharbe/Amazona-Ecommerce'
licence: MIT
website: 'https://catalyst-ecommerce.herokuapp.com/'
---
## Problem statement:

Create a fully functional E-commerce application on MERN stack.

### What's an e-commerce website?

[Wiki](https://en.wikipedia.org/wiki/E-commerce) says

> E-commerce is the activity of buying or selling online. Electronic commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems.

## Features:

The application has following features

- There are two different types of user roles, one is buyer and the other one is seller
- Seller is able to sell the product by posting it online
- Seller is able to see all the products that they have posted
- Buyer is able to see the list of all products posted by all sellers
- Buyer is able to see the specifications of the product by clicking on the product in the next page
- Buyer can add products to cart only if they have logged in
- Buyer can checkout the products which are there in the cart.
- User is able to filter the products with price, category, brand, etc
- User is able to search the products
- Buyers can comment and rate on the product if they have logged in
- Authentication with username & password and google oAuth

## Technologies used:

### Backend

- **Express** for creating backend API
- Database - MongoDB

### Frontend

- **ReactJS** for creating user interfaces
- **Redux** for managing application state
- AntDesign React UI library

### Factors focused on while building the app

- Code readability & maintainability
- Functionality
- Breakdown of problem
- Testing & Documentation

