# Hello Full Stack (Angular + Node.js)

This project is a straightforward full-stack example using Angular 17 (standalone) on the frontend and Node.js with Express on the backend. It’s Dockerized, cleanly structured, and built to actually run without wasting your time.

The app takes a name input in the browser and returns a custom greeting from the backend. That’s it. Nothing fancy, but everything works end to end — good foundation for bigger things.

## 🔧 Stack

- Angular 17 (standalone components, `HttpClient`, `FormsModule`)
- Node.js 22 + Express
- Docker multi-stage build
- Local dev with proxy config (no CORS headaches)

## 📦 Features

- Angular form to input a name
- Express POST endpoint at `/api/hello`
- Response: `Hello, {name}`
- Proxy config connects frontend to backend during development
- Docker build serves everything via Express in production

## 🚀 Getting Started

### Run locally with Node

```bash
# Backend
cd server
node index.js

# Frontend
cd client
ng serve
