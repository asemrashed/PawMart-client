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
import LatestListing from './components/home/latest/LatestListing.jsx'
import PetsAndSupplies from './components/pets&supplies/Pets&SuppliesPage.jsx'
import MyList from './components/myList/MyList.jsx'
import ProductDetails from './components/detailsPage/DetailsPage.jsx'
import MyOrders from './components/myOrders/MyOrders.jsx'

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
      },
      {
        path: "/pets&supplies",
        Component: PetsAndSupplies
      },
      {
        path: "/pets&supplies/?category=:category",
        loader: ({query})=> fetch(`${import.meta.env.VITE_SERVER}/listings/${query.category}`).then(res => res.json()),
        Component: ProductDetails
      },
      {
        path: "/pets&supplies/:id",
        loader: ({params})=> fetch(`${import.meta.env.VITE_SERVER}/listings/${params.id}`).then(res => res.json()),
        Component: ProductDetails
      },
      {
        path: "/my-list",
        Component: MyList
      },
      {
        path: "/my-orders",
        Component: MyOrders
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
