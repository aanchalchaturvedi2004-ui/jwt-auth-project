# JWT Authentication System

## Description
This project implements a simple authentication system using JSON Web Tokens (JWT).
Users can register, login, and access protected routes securely.

## Features
- User Registration
- User Login
- Password hashing using bcrypt
- JWT token authentication
- Protected route (/profile)

## Technologies Used
- Node.js
- Express.js
- JSON Web Token (JWT)
- bcrypt
- dotenv

## How to Run the Project

1. Install dependencies
npm install

2. Start the server
node server.js

3. Open the frontend
Open frontend/index.html in your browser.

## API Endpoints

POST /register  
Register a new user.

POST /login  
Login and receive a JWT token.

GET /profile  
Protected route that requires JWT authentication.