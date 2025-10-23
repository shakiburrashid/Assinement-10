import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/Root'
import Home from '../Pages/Home'
import More from '../Pages/More'
import About from '../Pages/About'
import Privacy_policy from '../Pages/Privacy_policy'
 
const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '',
                Component: Home 
            },
            {
                path: '/more',
                Component: More
            },
            {
                path: '/about',
                Component: About 
            },
            {
                path: '/privacy',
                Component: Privacy_policy 
            }
        ]
    },
    {
        path: '*',
        element: <div><h1>404 Not Found</h1></div>
    }
  ])
export default router