# Full-Stack Web Development (MERN Stack) Practicals

Comprehensive collection of Full-Stack Web Development practicals covering modern JavaScript (ES6+), Node.js runtime, React.js library with Vite, React Router, Axios for API data handling, Express.js web framework, and MongoDB with Mongoose ODM.

---

## 📋 Syllabus & Practicals Index

| Practical | Topic | Directory / Files | Key Concepts Covered |
| :---: | :--- | :--- | :--- |
| **1** | **Basic JavaScript & Node.js** | [`PRACTICAL1/`](./PRACTICAL1) | Node.js setup, console I/O, arithmetic operations, functions, conditional statements, loops & template literals |
| **2** | **Core JavaScript Concepts for MERN** | [`PRACTICAL2/`](./PRACTICAL2) | Reusable functions, parameters, array & object manipulation, arrow functions, `map`, `filter`, `reduce` |
| **3** | **React Introduction & JSX** | [`PRACTICAL3/`](./PRACTICAL3) | Vite + React setup, JSX syntax, dynamic expressions, basic CSS styling, functional components, dynamic Date & Time |
| **4** | **React Component Architecture** | [`PRACTICAL4/`](./PRACTICAL4) | Nested components, reusable UI blocks, Props passing, modular component architecture |
| **5** | **React Routing & Data Handling** | [`PRACTICAL5/`](./PRACTICAL5) | React Router DOM (`BrowserRouter`, `Routes`, `Route`, `Link`), Axios API fetching, table rendering, real-time live search |
| **6** | **Node.js & Express Fundamentals** | [`PRACTICAL6/`](./PRACTICAL6) | Express web server, port configuration, routing (`/`, `/about`, `/contact`), JSON API response (`/student`) |
| **7** | **MongoDB Basics & Mongoose** | [`PRACTICAL7/`](./PRACTICAL7) | MongoDB Community Server, Compass GUI CRUD operations, Mongoose connection, schema definition & document insertion |
| **8** | **API Creation & Integration (Full MERN Flow)** | [`PRACTICAL8/`](./PRACTICAL8) | End-to-end MERN: React UI form, Axios POST/GET, Express REST API, MongoDB document storage & retrieval |

---

## 🚀 Practical Details & Execution Guide

### Practical 1: Basic JavaScript
Location: [`PRACTICAL1/`](./PRACTICAL1)
- `app.js` – Basic Node.js console output.
- `basic.js` – Arithmetic operations (`+`, `-`, `*`, `/`, `%`).
- `functiondemo.js` – Variables, `greet(userName)`, and `add(a, b)`.
- `control.js` – `if-else` voting check, grade evaluation, and `switch-case` day mapper.
- `loopdemo.js` – `for` loop, template literals, and sum of first 5 natural numbers.

```bash
cd PRACTICAL1
node basic.js
node functiondemo.js
node control.js
node loopdemo.js
```

---

### Practical 2: Core JavaScript Concepts for MERN
Location: [`PRACTICAL2/`](./PRACTICAL2)
- `functions.js` – Parameterized functions and addition.
- `arrayobject.js` – Arrays (`fruits`) and Objects (`student`).
- `arrowFunction.js` – ES6 arrow functions (`square`, `multiply`).
- `arraymethods.js` – Higher-order array functions: `map()`, `filter()`, `reduce()`.
- `objectManipulation.js` – Modifying object properties, adding fields, and using `delete`.
- `studentManagement.js` – Combining arrays of objects, `forEach`, and average calculation using `reduce`.

```bash
cd PRACTICAL2
node arrowFunction.js
node arraymethods.js
node studentManagement.js
```

---

### Practical 3: React Introduction and JSX
Location: [`PRACTICAL3/`](./PRACTICAL3)
- `mern-first/` & `mern-app--/` – Initial React project created with Vite (`npm create vite@latest`).
- `practical3b/` – Dynamic JSX expressions and student details.
- `practical3c/` – Function execution and mathematical addition in JSX.
- `practical3d/` – CSS styling with `App.css`.
- `practical3e/` – Custom functional component `<Student />`.
- `practical3f/` – Dynamic real-time date and time component `<DateTime />`.

```bash
cd PRACTICAL3/practical3f
npm install
npm run dev
```

---

### Practical 4: React Components, Props, and State
Location: [`PRACTICAL4/`](./PRACTICAL4)
- `practical4a/` – Modular layout with `<Header />` and `<Footer />`.
- `practical4b/` – Passing props (`name`, `course`) to child components.
- `practical4c/` to `Practical4f/` – Interactive components, props drilling, and state management.

```bash
cd PRACTICAL4/practical4a
npm install
npm run dev
```

---

### Practical 5: React Routing and Data Handling
Location: [`PRACTICAL5/`](./PRACTICAL5)
- `Practical5a/` – React Router setup with `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`, and pages (`Home`, `About`, `Contact`).
- `practical5b/` – Fetching public API data from `jsonplaceholder.typicode.com/users` with Axios.
- `practical5c/` – Displaying fetched API user data in a structured HTML `<table>`.
- `practical5d/` – Dynamic real-time search and filtering on API data.

```bash
cd PRACTICAL5/Practical5a
npm install
npm run dev
```

---

### Practical 6: Node.js and Express Fundamentals
Location: [`PRACTICAL6/`](./PRACTICAL6)
- `server.js` – Complete Express server combining root route, about route, and JSON student response.
- `practical6a/server.js` – Simple server listener on port 3000.
- `practical6b/server.js` – Browser response with `res.send()`.
- `practical6c/server.js` – Multiple routing endpoints (`/`, `/about`, `/contact`).
- `practical6d/server.js` – JSON endpoint returning student details.

```bash
cd PRACTICAL6
npm install
node server.js
```
**Endpoints:**
- `http://localhost:3000/` -> `"Welcome to Express"`
- `http://localhost:3000/about` -> `"About Page"`
- `http://localhost:3000/student` -> `{"id": 1, "name": "Rahul", "course": "MERN"}`

---

### Practical 7: MongoDB Basics (Using MongoDB Compass) & Mongoose
Location: [`PRACTICAL7/`](./PRACTICAL7)
- Compass GUI walkthrough for creating database `MERNDB` and collection `students`.
- Inserting, viewing, updating, and deleting JSON documents in Compass.
- `dbconnect.js` – Connecting to MongoDB with Mongoose (`mongodb://127.0.0.1:27017/MERNDB`).
- `student.js` – Defining `StudentSchema`, compiling `Student` model, and saving student records.

```bash
cd PRACTICAL7
npm install
node dbconnect.js
node student.js
```

---

### Practical 8: API Creation and Integration (Complete MERN Stack Flow)
Location: [`PRACTICAL8/`](./PRACTICAL8)
- End-to-end full stack architecture connecting React UI, Express REST API, and MongoDB with Mongoose.
- `backend/server.js` – Express API exposing `GET /students` and `POST /students` on port 5000.
- `frontend/src/App.jsx` – React UI form sending Axios POST request and live rendering MongoDB student records.

```bash
# Start Backend
cd PRACTICAL8/backend
npm install
node server.js

# Start Frontend (in a separate terminal)
cd PRACTICAL8/frontend
npm install
npm run dev
```

