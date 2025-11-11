import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import AddNew from './components/AddListing/AddNew.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/add-listing",
        Component: AddNew
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>
)
