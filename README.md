# Aurelian Journey 🌟

![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?logo=render&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React_Vite-61DAFB?logo=react&logoColor=black)
![NestJS](https://img.shields.io/badge/Backend-NestJS-E0234E?logo=nestjs&logoColor=white)

Aurelian Journey is a premium luxury travel platform designed to offer exclusive expeditions across Indonesia. Featuring a highly aesthetic, fluid frontend and a robust backend integrated with the Midtrans payment gateway, this full-stack application brings curated travel experiences to life.

## 📸 Preview

*The frontend showcases a dark, cinematic aesthetic with smooth scroll animations, localized entirely in poetic Bahasa Indonesia.*

## ✨ Key Features

- **Immersive UI/UX:** Built with React and animated using GSAP for smooth, buttery scroll interactions and dynamic layouts.
- **Bahasa Indonesia Localization:** Thoughtful, aesthetic Indonesian copywriting that elevates the brand above literal translations.
- **Seamless Payments:** Integrated with Midtrans Sandbox via a custom API, allowing users to book expeditions in Indonesian Rupiah (Rp).
- **Full-Stack Architecture:** 
  - `aurelian-journey`: Vite + React + Tailwind CSS frontend.
  - `backend`: NestJS + Fastify backend to securely handle Midtrans API tokens and webhooks.
- **Always Awake:** Features a self-pinging background cron job to prevent the Render server from falling asleep on the free tier.

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, GSAP, Lucide Icons |
| **Backend** | NestJS, Fastify, RxJS, class-validator |
| **Payments** | Midtrans Node.js Client (Snap) |
| **Deployment** | Vercel (Frontend), Render (Backend) |

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Midtrans Sandbox Account

### 1. Backend Setup (`/backend`)
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
MIDTRANS_SERVER_KEY=your_server_key
MIDTRANS_CLIENT_KEY=your_client_key
MIDTRANS_MERCHANT_ID=your_merchant_id
```
Start the development server:
```bash
npm run start:dev
```
*The backend will run on `http://localhost:4000`.*

### 2. Frontend Setup (`/aurelian-journey`)
```bash
cd aurelian-journey
npm install
```
Start the development server:
```bash
npm run dev
```
*The frontend will run on `http://localhost:3000` and automatically proxy API requests to the backend.*

## 🌍 Deployment
- **Frontend** is configured for 1-click deployment on [Vercel](https://vercel.com/) via the `vercel.json` rewrite rules. Make sure to set the `VITE_BACKEND_URL` environment variable.
- **Backend** is configured with a `render.yaml` Blueprint for automated deployment on [Render](https://render.com/).

## 📄 License
This project is for demonstration and portfolio purposes.
