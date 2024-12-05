import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom" 
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
 {
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    
    {
      path:"/signup",
      element:<SignUp/>
    },

  ]

 }
])

createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router={router}/>
 </React.StrictMode>
)
