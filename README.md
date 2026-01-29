# 🛒 Grocery List MVC App  
*A beginner-friendly full-stack project to understand MVC using React + Node/Express*

---

## 🌱 Project Purpose

This project is a **simple grocery list application** built to strengthen my understanding of:

- 🧠 MVC architecture
- ⚛️ React front-end structure
- 🚏 Express routing
- 🎮 Controllers vs Models responsibilities
- 🔄 Client–Server data flow

The app is intentionally simple *for now*, but designed to scale with:

- 🔐 Authentication
- 🗄️ Database integration
- 🚀 Deployment
- 🎨 UI improvements

---

## 🏗️ Tech Stack

### Frontend
- ⚛️ React
- 📡 Fetch API
- 🎯 Functional components + hooks

### Backend
- 🟢 Node.js
- 🚏 Express
- 🧩 MVC structure
- 💾 In-memory data storage (for now)

---

## 🧠 MVC Breakdown (How This App Uses MVC)

### 📦 Model
Responsible for:
- Data storage
- Business logic
- Item structure

Current Implementation:
```
server/src/models/groceryModel.js
```

Handles:
- Create grocery item
- Toggle purchased state
- Delete item
- Retrieve all items

---

### 🎮 Controller
Responsible for:
- Handling requests
- Validating input
- Calling model functions
- Sending responses

Location:
```
server/src/controllers/groceryController.js
```

Examples:
- `listItems`
- `addItem`
- `toggleItem`
- `deleteItem`

---

### 🎨 View
The user interface built with React.

Location:
```
client/src/components/
client/src/pages/
```

Responsibilities:
- Display grocery items
- Handle user input
- Trigger API requests

---

### 🚏 Routes
Maps URLs → Controllers

Location:
```
server/src/routes/groceryRoutes.js
```

---

## ✨ Current Features

✅ Add grocery items  
✅ Toggle purchased state  
✅ Delete items  
✅ MVC architecture separation  
✅ REST API structure  
✅ React component hierarchy  

---

## 📁 Folder Structure

```
grocery-mvc/
│
├── client/            # React Frontend
│   ├── components/
│   ├── pages/
│   ├── api/
│   └── App.jsx
│
├── server/            # Express Backend
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── app.js
│
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo
```
git clone <your-repo-url>
cd grocery-mvc
```

---

### 2️⃣ Start the Backend
```
cd server
npm install
npm run dev
```

Server runs at:
```
http://localhost:5000
```

---

### 3️⃣ Start the Frontend
```
cd client
npm install
npm run dev
```

---

## 🔄 API Endpoints

| Method | Endpoint | Description |
|--------|---------|------------|
GET | `/api/groceries` | Fetch all items |
POST | `/api/groceries` | Add new item |
PATCH | `/api/groceries/:id/toggle` | Toggle purchased |
DELETE | `/api/groceries/:id` | Remove item |

---

## 🎯 Learning Goals

This project helps me practice:

- 🧠 MVC separation
- 🔁 Data flow in full-stack apps
- 🧩 Component design
- 📡 REST APIs
- 🧼 Clean folder organization
- 🛠️ Preparing for scalable architecture

---

## 🔮 Planned Future Features

### 🔐 Authentication
- User accounts
- Login/logout
- JWT protection
- User-specific grocery lists

---

### 🗄️ Database Integration
- Replace in-memory storage
- MongoDB or PostgreSQL
- Persistent user data
- Migrations

---

### 🎨 UI Improvements
- Better styling
- Animations
- Mobile responsiveness
- Dark mode 🌙

---

### ⚡ Performance Enhancements
- Optimistic updates
- Caching
- Pagination

---

### 🚀 Deployment
- Frontend hosting
- Backend hosting
- Environment variables
- Production configs

---

## 🧩 Lessons Learned So Far

✔️ Controllers should not contain business logic  
✔️ Models should not handle requests  
✔️ Views should remain presentation-focused  
✔️ Separation makes scaling easier  

---

## 🤝 Contribution Ideas

- Add categories for groceries 🥦
- Add due dates 📅
- Add priority levels 🚨
- Search/filter 🔍
- Drag & drop sorting 🎯

---

## 💡 Why This Project Matters

This app acts as a **foundation** for:

- Authentication systems
- Database integration
- Larger React applications
- API design patterns
- Scalable backend structure

---

## 🧠 Author Notes

This project was built as a learning exercise to better understand:

- MVC patterns
- Full-stack communication
- Clean architecture
- Scalable code organization

---

## 🥳 Final Thoughts

Small projects with clear architecture build strong engineering habits.

Today: Grocery List  
Tomorrow: Full-scale applications 🚀
