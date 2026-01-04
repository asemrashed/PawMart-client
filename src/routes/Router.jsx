import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import Error from '../layouts/Error'
import PrivetRoute from './PrivetRoute'
import AddNew from '../components/AddListing/AddNew'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import Home from '../components/home/Home'
import PetsAndSupplies from '../components/pets&supplies/Pets&SuppliesPage'
import ProductDetails from '../components/detailsPage/DetailsPage'
import MyList from '../components/myList/MyList'
import MyOrders from '../components/myOrders/MyOrders'
import NotFound from '../components/errors/NotFound'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../dashboard/Dashboard'
import UsersManagement from '../dashboard/user/UserManagement'
import PetsSupplies from '../dashboard/pets&supplies/Pets&supplies'
import MyPosts from '../dashboard/myPosts/MyPosts'
import AllOrders from '../dashboard/orders/AllOrders'
import MyOrdersDashboard from '../dashboard/orders/MyOrders'
import Profile from '../dashboard/profile/Profile'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'

const router = createBrowserRouter([
  {
    path:"/",
    Component: RootLayout,
    errorElement: <NotFound/>,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/contact",
        Component: Contact
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
        element: <PrivetRoute><AddNew/></PrivetRoute>
      },
      {
        path: "/pets&supplies",
        Component: PetsAndSupplies
      },
      {
        path: "/pets&supplies/:id",
        loader: ({params})=> fetch(`${import.meta.env.VITE_SERVER}/listings/${params.id}`).then(res => res.json()),
        Component: ProductDetails
      },
      {
        path: "/my-list",
        element: <PrivetRoute><MyList/></PrivetRoute>
      }
    ]
  },
    {
    path: "/dashboard",
    element: <PrivetRoute><DashboardLayout/></PrivetRoute>,
    children:[
        {
        index: true,
        Component: Dashboard
        },
        {
            path: "/dashboard/users",
            Component: UsersManagement
        },
        {
            path: "/dashboard/pets&supplies",
            Component: PetsSupplies
        },
        {
            path: "/dashboard/my-posts",
            Component: MyPosts
        },
        {
            path: "/dashboard/all-orders",
            Component: AllOrders
        },
        {
            path: "/dashboard/my-orders",
            Component: MyOrdersDashboard
        },
        {
            path: "/dashboard/profile",
            Component: Profile
        },
    ]
    }
])

export default router