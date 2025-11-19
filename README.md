# 🐾 PawMart - Pet Adoption Platform

A modern, responsive web application for pet adoption that connects loving homes with pets in need. Built with React and Tailwind CSS.

<!-- ===================== BANNER ===================== -->
<p align="center">
  <img src="https://github.com/asemrashed/PawMart-client/blob/main/PawMart.png?raw=true" alt="Asem Rashed Banner" width="100%">
</p>
## 🚀 Live Demo

- **Live Site**: [https://pawmart-client.vercel.app/](https://pawmart-client.vercel.app/)
- **Client Repository**: [https://github.com/asemrashed/PawMart-client](https://github.com/asemrashed/PawMart-client)
- **Server Repository**: [https://github.com/asemrashed/PawMart-server](https://github.com/asemrashed/PawMart-server)

## ✨ Features

### 🔐 Authentication & User Management
- User registration and login system
- Secure JWT-based authentication
- User profile management
- Protected routes for authenticated users

### 🐕 Pet Management
- Browse available pets for adoption
- Filter pets by species, breed, age, and location
- Detailed pet profiles with images
- Add new pets for adoption
- Manage your listed pets

### 💬 Adoption System
- Send adoption requests to pet owners
- Track adoption request status
- Adoption history tracking

### 🎨 User Experience
- Responsive design for all devices
- Modern and intuitive UI/UX
- Fast loading with optimized images

## 🛠️ Technology Stack

### Frontend
- **React** - UI framework
- **Tailwind CSS** - Styling and responsive design
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Notifications
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **cors** - Cross-origin resource sharing

### Deployment
- **Firebase** - client
- **Vercel** - Backend deployment
- **MongoDB Atlas** - Cloud database & imagbb

## 📦 Dependencies

### Main Dependencies
```json
{
  "name": "pawmart-client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "axios": "^1.13.2",
    "firebase": "^12.5.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.5",
    "sweetalert2": "^11.26.3",
    "swipe": "^1.7.7",
    "swiper": "^12.0.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "autoprefixer": "^10.4.22",
    "daisyui": "^5.5.0",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.17",
    "vite": "^7.1.7"
  }
}
