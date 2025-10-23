import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/Root'
import Home from '../Pages/Home'
import Collection from '../Pages/Collection'
import About from '../Pages/About'
import Privacy_policy from '../Pages/Privacy_policy'
import Contact from '../Pages/Contact'
 
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
                path:'/contact',
                Component: Contact
            }
        ]
    },
    {
        path: '*',
        element: <div><h1>404 Not Found</h1></div>
    }
  ])
export default router