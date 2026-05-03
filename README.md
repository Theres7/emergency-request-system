# Emergency Request System

A Java Spring Boot - React JS full-stack application for managing emergency requests efficiently. It displays the list of all the emergency requests by priorty of the rquests - higher priority requests will be on the top. The priority score is calculated based on the type of emergency, urgency level and number of people affected. User can register request by adding necessary details on the form.

## Table of Contents
- [Overview](#project-overview)
- [Key Technologies](#key-technologies)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Backend Development](#backend-development)
- [Frontend Development](#frontend-development)

<img width="1464" height="875" alt="Screenshot 2026-05-03 at 11 51 34 AM" src="https://github.com/user-attachments/assets/f6fc89f4-4d51-4651-b0f6-bfe4ab6d2d37" />

<img width="1464" height="687" alt="Screenshot 2026-05-03 at 11 58 52 AM" src="https://github.com/user-attachments/assets/7ed97400-46ef-4794-90d8-ca63f30b6b37" />

## Project Overview

The Emergency Request System is designed to streamline the process of submitting, tracking, and managing emergency requests. It provides a seamless user experience with real-time request management capabilities.

**Key Technologies:**
- **Backend**: Java Spring Boot 3.5.12
- **Frontend**: React 19 with Vite
- **Database**: H2 (Development), MySQL (Production-ready)
- **UI Framework**: Material-UI (MUI) and Bootstrap
- **HTTP Client**: Axios
- **API Documentation**: OpenAPI/Swagger

## Prerequisites

- **Java 17+** (for backend)
- **Node.js 22+** and npm (for frontend)
- **Maven** (included as mvnw wrapper)

## Backend Setup

1. Navigate to the backend directory:
   
```bash
   cd emergency-request-system-backend
```

2. Run the application:

```bash
./mvnw spring-boot:run
```

The backend will start on http://localhost:9090

##   Frontend Setup

1. Navigate to the frontend directory:

```bash
cd emergency-request-system-frontend
```

2. Start the development server:

```bash
npm run dev
```

The frontend will be available on http://localhost:5173

Build for production:

```bash
npm run build
```

## Backend Development

- Framework: Spring Boot
- API Endpoints: RESTful architecture with Spring Data JPA
- Validation: Built-in validation annotations
- Utilities: Lombok for reducing boilerplate code
- Environment Variables: Managed via spring-dotenv

## Frontend Development

- Framework: React 
- Build Tool: Vite
- Routing: React Router 
- UI Components: Material-UI (MUI) and React Bootstrap
- HTTP Requests: Axios