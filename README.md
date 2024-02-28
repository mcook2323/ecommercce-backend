# ecommercce-backend
This project is a RESTful API for managing products and categories. It allows users to create, read, update, and delete products, as well as associate products with categories.

## Features 
* Product Management: CRUD operations for products, including creating, reading, updating, and deleting products.
* Category Association: Products can be associated with categories, allowing for categorization and organization.
* Validation: Input validation to ensure data integrity and consistency.
* Database Persistence: Uses Sequelize ORM for database interactions, providing robust data persistence and query capabilities.
* RESTful API: Follows REST principles for designing and implementing HTTP endpoints.

## Technologies Used
* Node.js: JavaScript runtime environment for building server-side applications.
* Express.js: Web application framework for Node.js, used for routing and middleware.
* Sequelize: ORM (Object-Relational Mapping) library for Node.js, used for interacting with relational databases.
* MySQL: Relational database management system, used for data storage.
* Insomnia: API design and testing platform, used for testing API endpoints and requests

## Installation
1. Clone the repository:

```bash
git clone <'https://github.com/mcook2323/ecommercce-backend'>
```
2. Install dependencies:
```bash
cd ecommercce_backend
npm install
```
3. Set up environment variables:

Copy the .env.example file to .env.
Update the .env file with your MySQL database configuration and any other environment variables needed.

4. Run the server:

```bash
npm start
```
## Usage

* Endpoints: The API provides the following endpoints:

* GET /products: Get all products.
* GET /products/:id: Get a single product by ID.
* POST /products: Create a new product.
* PUT /products/:id: Update a product by ID.
* DELETE /products/:id: Delete a product by ID.
* GET /categories: Get all categories.
* GET /categories/:id: Get a single category by ID.
* POST /categories: Create a new category.
* PUT /categories/:id: Update a category by ID.
* DELETE /categories/:id: Delete a category by ID.


## Walkthrough

### All Display 
![](Untitled_%20Feb%2027,%202024%206_22%20PM.gif)

### Single Display
![](Untitled_%20Feb%2027,%202024%206_26%20PM.gif)