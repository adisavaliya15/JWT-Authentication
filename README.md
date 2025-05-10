# MERN Authentication System

A complete authentication system built with the MERN stack featuring JWT authentication and role-based authorization.

## ✨ Features

- **🔐 User Authentication**:

  - Login with email/password
  - Registration with role selection
  - JWT token-based auth
  - Password hashing with bcrypt

- **👥 Role-Based Access**:

  - Two roles: `user` and `admin`
  - Protected routes by role
  - Separate dashboards

- **🎨 Frontend**:
  - Responsive Tailwind CSS design
  - Form validation
  - Error handling
  - Dynamic navigation

## 🛠 Technologies

### Backend

| Technology | Purpose          |
| ---------- | ---------------- |
| Node.js    | Runtime          |
| Express.js | Framework        |
| MongoDB    | Database         |
| Mongoose   | ODM              |
| JWT        | Authentication   |
| Bcrypt.js  | Password hashing |

### Frontend

| Technology   | Purpose          |
| ------------ | ---------------- |
| React        | UI Library       |
| React Router | Routing          |
| Tailwind CSS | Styling          |
| Heroicons    | Icons            |
| Axios        | HTTP Client      |
| Context API  | State Management |

## 📁 Project Structure

```text
mern-auth/
├── backend/
│   ├── config/       # Config files
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Auth middleware
│   ├── models/       # MongoDB models
│   ├── routes/       # API endpoints
│   ├── utils/        # Utilities
│   ├── app.js        # Express app
│   └── server.js     # Server entry
│
├── frontend/
│   ├── public/       # Static files
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── context/    # Auth context
│   │   ├── pages/      # View pages
│   │   └── ...         # Other frontend files
│   └── package.json
│
└── README.md
```

---

### Clone the Repository

```bash
git clone https://github.com/adisavaliya15/JWT-Authentication.git
cd JWT-Authentication
```

### Install Dependencies

# .env File Setup:

- MONGODB_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_signing_secret
- JWT_EXPIRES_IN=token_expiry_time
- PORT=server_port

# Backend Setup:

- cd backend
- npm install
- npm start

# Frontend Setup:

- cd frontend
- npm install
- npm start

---
