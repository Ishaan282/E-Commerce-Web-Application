# E-Commerce Web Application
A full-stack e-commerce web application built with React, Node.js, Express, and MongoDB. Features user authentication, product catalog with filtering, shopping cart with persistence, and a responsive design.

## Live demo 
- https://e-commerce-web-application-3x2aplyo9-ishaan282s-projects.vercel.app/

## Features
- User Authentication: JWT-based registration and login system
- Product Catalog: Browse products with category and price filters
- Shopping Cart: Add/remove items with persistent storage (even after logout)
- Responsive Design: Professional UI that works on all devices
- RESTful APIs: Clean backend API structure

## Tech Stack
### Frotend 
- React with Vite
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls
- Context API for state management

### Backend 
- Node.js with Express
- MongoDB with Mongoose ODM
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled for frontend communication

## Setup Instructions
1) Clone the repository
    ```
    git clone <repo-url>
    cd e-commerce
    ```
2) Backend Setup
    ```
    cd backend
    npm install
    ```

3) Environment Variables :- 
    <br>Create a `.env` file in the backend directory:
    ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    ```

4) Seed the Database :- (uploading dummy data in DB)
    ```
    cd backend
    node seedProducts.js
    ```
5) Start the Backend
    ```
    npm run dev
    ```
6) Frontend Setup
    ```
    cd frontend
    npm install
    ```
7) Frontend Environment Variables<br>
    Create a `.env` file in the frontend directory:
    ```
    VITE_API_URL=http://localhost:5000/api
    ```
8) Start the Frontend
    ```
    num run dev
9)  Project Structure
    ```
    e-commerce/
    ├── backend/
    │   ├── models/
    │   │   ├── User.js
    │   │   ├── Product.js
    │   │   └── Cart.js
    │   ├── routes/
    │   │   ├── auth.js
    │   │   ├── products.js
    │   │   └── cart.js
    │   ├── middleware/
    │   │   └── auth.js
    │   ├── seedProducts.js
    │   ├── index.js
    │   └── .env
    └── frontend/
        ├── src/
        │   ├── components/
        │   │   ├── Navbar.jsx
        │   │   ├── ProductCard.jsx
        │   │   ├── FilterSidebar.jsx
        │   │   └── CartItem.jsx
        │   ├── pages/
        │   │   ├── Home.jsx
        │   │   ├── Login.jsx
        │   │   ├── Register.jsx
        │   │   ├── Products.jsx
        │   │   └── Cart.jsx
        │   ├── contexts/
        │   │   ├── AuthContext.jsx
        │   │   └── CartContext.jsx
        │   ├── api/
        │   │   ├── auth.js
        │   │   ├── products.js
        │   │   └── cart.js
        │   ├── App.jsx
        │   └── main.jsx
        └── .env
    ```

## Api endpoints
### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify JWT token

### Products
- `GET /api/products` - Get all products (with optional filters)
- `GET /api/products/:id` - Get single product
- `GET /api/products/categories/list` - Get all categories

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/remove/:productId` - Remove item from cart
- `PUT /api/cart/update/:productId` - Update item quantity
- `DELETE /api/cart/clear` - Clear cart

## Features Overview
### User Authentication
- Secure JWT-based authentication
- Password hashing with bcryptjs
- Protected routes on frontend and backend

### Product Management
- Product catalog with filtering by category and price
- Search functionality
- Product details pages

### Shopping Cart
- Add/remove items from cart
- Persistent cart storage (localStorage for guests, database for users)
- Quantity updates
- Cart total calculation

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Professional UI components
- Smooth animations and transitions

