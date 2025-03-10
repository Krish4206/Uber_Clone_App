# Uber Clone - Backend Documentation

## Overview

This is the backend service for the Uber Clone app, built using **Node.js, Express, and MongoDB**. It handles user authentication, registration, and database connectivity.

## Tech Stack

- **Backend Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Validation:** express-validator
- **Password Hashing:** bcrypt

## Project Structure

```
Uber_Clone_App/
│-- backend/
│   ├── controllers/      # Handles request logic
│   │   ├── user.controller.js
│   ├── db/               # Database connection
│   │   ├── db.js
│   ├── models/           # Schema definitions
│   │   ├── user.model.js
│   ├── routes/           # API route definitions
│   │   ├── user.routes.js
│   ├── services/         # Business logic and database interactions
│   │   ├── user.service.js
│   ├── app.js            # Main Express app
│   ├── .env              # Environment variables
```

## API Endpoints

### 1️⃣ **User Registration**

**Endpoint:** `POST /api/user/register`

**Request Payload:**

```json
{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "654321abcdef",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com"
  }
}
```

### 2️⃣ **User Login** *(To be implemented)*

## Database Connection

The connection is handled in `db/db.js`. Ensure the `.env` file has:

```
DB_CONNECT=<your_mongo_db_connection_url>
JWT_SECRET=<your_secret_key>
```

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Krish4206/Uber_Clone_App.git
   ```
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

The server should now be running on `http://localhost:5000` (or as per `.env` configuration).

## Contributing

For common development, follow these steps:

- Pull the latest changes: `git pull origin main`
- Create a new branch: `git checkout -b feature-name`
- Commit changes: `git commit -m "Description of changes"`
- Push branch: `git push origin feature-name`
- Create a Pull Request (PR) on GitHub.
