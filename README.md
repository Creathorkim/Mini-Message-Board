# Mini Message Board

A sleek, full-stack messaging board app built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**. This project demonstrates modern backend architecture using the **pg** module for persistent data storage, with messages rendered dynamically in a clean, chat-style UI.

## Features

- Submit and store messages in a PostgreSQL database
- Persistent storage via `pg`'s `Client` (for seeding) and `Pool` (for user interactions)
- Dynamic rendering with EJS templates
- Real-time feel with chat-style layout and Tailwind CSS
- MVC-based file structure for scalability and organization
- Secure configuration using environment variables with `dotenv`
- Clean seed script to set up the `messages` table and insert initial data

---

## Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Routing and server logic
- **PostgreSQL** – Relational database for persistent storage
- **pg** – PostgreSQL client for Node.js, using:
  - `Client` for one-time DB seeding
  - `Pool` for app-level database connections
- **EJS** – Templating engine for server-side rendering
- **Tailwind CSS** – Utility-first CSS for responsive and modern UI
- **dotenv** – For managing sensitive config like `DATABASE_URL`

---

## How I Used PostgreSQL

- **Seeding**  
  Using `pg.Client`, I created the `messages` table and inserted starter data via a standalone script (`db/seed.js`). This ensures the database schema is consistent and can be reset easily.

- **App Queries**  
  In the live app, I use `pg.Pool` to handle database operations efficiently. This allows multiple users to submit or retrieve messages concurrently without opening new DB connections each time.

- **Live Demo** 
  https://mini-message-board-kt5n.onrender.com/