import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/Root'
import Home from '../Pages/Home'
import Collection from '../Pages/Collection'
import About from '../Pages/About'
import Privacy_policy from '../Pages/Privacy_policy'
import Contact from '../Pages/Contact'
import AuthLayout from '../Layout/AuthLayout'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Collection_Details from '../Pages/Collection_Details'
import PrivateRoute from '../Pages/PrivateRoute'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/collection',
                Component: Collection
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/privacy',
                Component: Privacy_policy
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/collection/:id',
                Component: PrivateRoute,
                loader: () => fetch('Course.json')
            }
        ]
    },
    {
        path: '*',
        element: <div><h1>404 Not Found</h1></div>
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    }
])
export default router