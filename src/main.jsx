import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Home from './components/Home.jsx'
import Blog from './components/Blog.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import ChefRecipe from './components/ChefRecipe'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children : [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/chef')
      },
      {
       path: '/:id',
       element: <ChefRecipe></ChefRecipe>,
       loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
