🛒 Grocery List MVC App

A full-stack MVC project using React + Node/Express with JWT Authentication

🌱 Project Purpose

This project started as a simple grocery list app to better understand MVC architecture in a full-stack environment.

It has since evolved into a properly structured application featuring:

🧠 MVC architecture

⚛️ React front-end structure

🚏 Express routing

🔐 JWT authentication

🛡 Role-based authorization

🔄 Protected API routes

📡 Centralized client-side API layer

💾 In-memory storage (intentionally, for learning architecture)

The goal of this project is to build strong architectural habits before introducing database complexity.

🏗️ Tech Stack
Frontend

⚛️ React

📡 Fetch API (abstracted via http utility)

🎯 Functional components + hooks

🔐 Token-based session storage

Backend

🟢 Node.js

🚏 Express

🔑 jsonwebtoken

🔒 bcryptjs

🧩 MVC structure

💾 In-memory data storage

🔐 Authentication & Authorization

The app now supports:

User registration

User login

JWT token issuance

Protected routes via middleware

Role-based access control

Roles
"user"  - Can only view and manage their own groceries
"admin" - Can view all groceries

Security Flow

User registers or logs in

Server verifies credentials

Server signs a JWT containing:

{ id, email, role }


Client stores token in localStorage

All protected routes require:

Authorization: Bearer <token>

🧠 MVC Breakdown
📦 Model

Responsible for:

Data storage

Business logic

Item structure

Current Implementation:

server/models/db.js


Because storage is in-memory, data resets on server restart.
This is intentional for learning architecture before adding a database.

🎮 Controller

Responsible for:

Handling requests

Validating input

Calling model logic

Sending responses

Examples:

authController.js
groceryController.js


Handles:

Register

Login

List groceries

Create item

Toggle item

Delete item

🛡 Middleware

Authentication and authorization are handled via middleware:

server/middleware/requireAuth.js
server/middleware/requireRole.js


Responsibilities:

Verify JWT

Attach user to request

Restrict access based on role

🎨 View (Frontend)

React handles:

Displaying grocery items

Managing authentication state

Triggering API calls

Protecting routes

API calls are centralized in:

client/api/http.js
client/api/authApi.js
client/api/groceryApi.js

🚏 Routes

Maps URLs to controllers:

server/routes/authRoutes.js
server/routes/groceryRoutes.js

✨ Current Features

✅ Add grocery items
✅ Toggle purchased state
✅ Delete items
✅ MVC separation
✅ JWT authentication
✅ Role-based authorization
✅ Protected routes
✅ Centralized API request utility
✅ RESTful API structure

📁 Updated Folder Structure
grocery-mvc/
│
├── client/
│   ├── api/
│   │   ├── http.js
│   │   ├── authApi.js
│   │   └── groceryApi.js
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
├── server/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── groceryController.js
│   ├── middleware/
│   │   ├── requireAuth.js
│   │   └── requireRole.js
│   ├── models/
│   │   └── db.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── groceryRoutes.js
│   ├── utils/
│   │   └── jwt.js
│   └── app.js
│
└── README.md

🚀 Getting Started
1️⃣ Clone the Repo
git clone https://github.com/bjaegerthomas/grocery-mvc.git
cd grocery-mvc

2️⃣ Backend Setup
cd server
npm install


Create a .env file inside /server:

PORT=5000
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d


Start server:

npm run dev


Server runs at:

http://localhost:5000

3️⃣ Frontend Setup
cd client
npm install
npm run dev

🔄 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/auth/me	Validate token
Groceries (Protected)

All routes below require JWT.

Method	Endpoint	Description
GET	/api/groceries	Fetch groceries (role-based visibility)
POST	/api/groceries	Add new item
PATCH	/api/groceries/:id/toggle	Toggle purchased
DELETE	/api/groceries/:id	Delete item (admin or owner)
🎯 Learning Outcomes

This project strengthened my understanding of:

MVC separation of concerns

Middleware-driven authentication

Role-based access control

JWT token flow

Client-server communication

Scalable project structure

Clean API layering

Preparing for production architecture

🔮 Next Steps
🗄 Database Integration

Replace in-memory storage

PostgreSQL or MongoDB

Persistent user data

Migration strategy

🎨 UI Improvements

Better styling

Mobile responsiveness

Dark mode

Loading states

⚡ Performance Enhancements

Optimistic UI updates

Pagination

Caching

🚀 Deployment

Frontend hosting

Backend hosting

Production environment configs

🧩 Lessons Learned

✔ Controllers should not contain business logic
✔ Models should not handle HTTP requests
✔ Middleware keeps authentication clean
✔ Centralized API utilities improve scalability
✔ MVC scales naturally when structured correctly

💡 Why This Project Matters

This project demonstrates:

Real authentication flow

Clean MVC implementation

Protected REST APIs

Role-based access control

Frontend API abstraction

Scalable architecture foundations

It represents the transition from:

"A simple CRUD demo"

to

"A structured full-stack application with authentication and authorization."

🧠 Author Notes

This project was built to deepen my understanding of:

Clean architecture

Full-stack data flow

JWT-based security

Separation of concerns

Building scalable systems incrementally

Small projects with strong architecture build strong engineering habits.

Today: Grocery List
Tomorrow: Production systems 🚀