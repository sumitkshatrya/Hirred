
📌 Event Requirement & Hiring Platform

A modern multi-step event requirement posting platform built with Next.js, Tailwind CSS, Node.js, Express, and MongoDB.
The application allows event organizers to post detailed event requirements and dynamically hire Event Planners, Performers, or Crew, with structured data collection and AI-ready architecture.

🚀 Features
🔹 Multi-Step Requirement Form

Step 1: Event details (name, type, date, location, venue)

Step 2: Hire selection (Planner / Performer / Crew)

Step 3: Role-specific details with validation

Step 4: Success confirmation

🔹 Dynamic Role-Based Fields

Planner: Budget & duration

Performer: Performance types & preferred languages

Crew: Crew types, count, equipment requirements

🔹 Smart Budget Calculation

Budget entered per day

Auto-calculates total budget based on event duration

🔹 Clean UX

Card-based selections

Disabled submit until required fields are filled

Progress indicator

Dark mode support

🔹 Backend-Ready Structure

Clean and structured payload

AI-recommendation compatible schema

Easy filtering and analytics support

🧠 AI-Ready Architecture

This project is designed to support:

Semantic matching using OpenAI embeddings

Rule-based + AI hybrid recommendations

Budget estimation & recommendation logic

Future personalization based on past hires

🛠 Tech Stack
Frontend

Next.js (App Router)

React

Tailwind CSS

TypeScript

Backend

Node.js

Express.js

MongoDB

Mongoose

📁 Folder Structure
frontend/
├── app/
│   ├── components/
│   │   ├── StepOne.tsx
│   │   ├── StepTwo.tsx
│   │   ├── StepThree.tsx
│   │   └── StepIndicator.tsx
│   ├── lib/
│   │   └── api.ts
│   ├── layout.tsx
│   └── page.tsx
│
backend/
├── models/
│   └── Requirement.js
├── routes/
│   └── requirements.js
├── config/
│   └── db.js
└── server.js

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/event-hiring-app.git
cd event-hiring-app

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:3000

3️⃣ Backend Setup
cd backend
npm install
node server.js


Backend runs on:

http://localhost:5000

📦 API Endpoint
Create Requirement
POST /api/requirements

Sample Payload
{
  "eventName": "Wedding",
  "eventType": "Wedding Ceremony",
  "date": "2026-02-10",
  "location": "Delhi",
  "hireType": "crew",
  "details": {
    "crewTypes": ["Sound", "Lighting"],
    "crewCount": 6,
    "perDayBudget": 5000,
    "duration": 2,
    "totalBudget": 10000
  }
}

🔒 Validation Rules

All required fields must be filled before submission

Crew requires:

At least one crew type

Crew count

Budget & duration

Budget must be greater than zero

Duration must be at least one day

🧪 Known Development Notes

Hydration warnings in development may occur due to browser extensions (e.g., Grammarly)

These do not affect production builds

🎯 Future Enhancements

AI-powered candidate recommendations

Cost breakdown and price suggestions

Authentication & user profiles

Admin dashboard & analytics

MongoDB Atlas vector search

Booking & messaging system