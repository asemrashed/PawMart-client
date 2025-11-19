# PawMart — Pet Adoption & Accessories Platform 🐾

![PawMart Banner](https://raw.githubusercontent.com/asemrashed/PawMart-client/main/PawMart.png)

A modern, responsive web application for pet adoption and accessory sales. PawMart connects loving homes with pets in need while also offering pet products for purchase. This is the **client-side** of the platform.

---

## 🌐 Live Demo & Repositories

- **Live Site:** [https://pawmart-client.vercel.app](https://pawmart-client.vercel.app)  
- **Client Repository:** [asemrashed/PawMart-client](https://github.com/asemrashed/PawMart-client)  
- **Server Repository:** [asemrashed/PawMart-server](https://github.com/asemrashed/PawMart-server)

---

## ✨ Features

- **Authentication & User Management**  
  - User registration & login  
  - JWT-based authentication  
  - User profile management  
  - Protected routes for logged-in users  

- **Pet Management**  
  - Browse pets available for adoption  
  - Filter by species, breed, age, and location  
  - View detailed pet profiles with images  
  - Add pets for adoption (for pet owners)  
  - Manage listed pets  

- **Adoption Workflow**  
  - Send adoption requests  
  - Track request status  
  - View adoption history  

- **User Experience**  
  - Fully responsive design (mobile, tablet, desktop)  
  - Modern, intuitive UI  
  - Fast page loads with optimized images  

---

## 🛠️ Tech Stack

Here is a breakdown of the main technologies used in this project:

| Layer | Technology | Description |
|---|---|---|
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) React | UI component library |
|  | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) Tailwind CSS | Utility-first CSS framework |
|  | ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) React Router | Client-side routing |
|  | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) Axios | Promise-based HTTP client |
|  | ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=flat&logo=react&logoColor=black) React Icons | Icons library |
|  | ![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-EC5990?style=flat) React Hot Toast | Notification library |
| **Deployment** | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black) Firebase | Hosting and backend for client |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) Vite | Build tool & dev server |

---

## 📦 Dependencies

From your `package.json`, the major dependencies are:

```json
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
````

---

## 🚀 Getting Started (Run Locally)

To run this project on your local machine:

1. **Clone the repository**

   ```bash
   git clone https://github.com/asemrashed/PawMart-client.git
   cd PawMart-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173` (or whichever port Vite reports).

---

## 🔧 Environment & Configuration

* The project uses **Firebase** for hosting. Make sure you have your Firebase configuration in your `.env` or `.env.local` (if used).
* Ensure your **API base URL** (to your PawMart-server) is correctly set in your client code when making HTTP requests.

---

## 🤝 Contribution

Contributions are welcome! If you want to …

* Report bugs
* Propose new features
* Improve UI or performance

… please open an issue or a pull request.
---

## 💡 Additional Resources

* [React Documentation](https://react.dev)
* [Tailwind CSS](https://tailwindcss.com)
* [Vite](https://vitejs.dev)
* [Firebase](https://firebase.google.com)

---

