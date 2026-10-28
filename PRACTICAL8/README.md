# Practical 8: API Creation and Integration

## Aim
To create a REST API using Express, integrate it with a React application, store data in MongoDB, and display the stored data in React.

---

## Architecture
```
React Frontend Form
       ↓ (Axios POST)
Express REST API (Port 5000)
       ↓ (Mongoose Save)
MongoDB Database (MERNDB / students)
       ↓ (Mongoose Find)
Express GET API (/students)
       ↓ (Axios GET)
React Frontend Display
```

---

## 1. Backend Setup & Run

```bash
cd backend
npm install
node server.js
```

### Endpoints
- `GET /` — Health check: `"REST API Working"`
- `GET /students` — Retrieve list of students from MongoDB
- `POST /students` — Add a new student document (`{ "name": "Rahul", "course": "MERN" }`)

---

## 2. Frontend Setup & Run

```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.
