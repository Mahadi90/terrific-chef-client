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
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './components/ErrorPage'
import AuthProvider from './providers/AuthProvider'
import PrivateRoutes from './routes/PrivateRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement:<ErrorPage/>,
    children : [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('https://terrific-chef-server-side-mahadimhs787-gmailcom.vercel.app/chef')
      },
      {
       path: '/:id',
       element: <PrivateRoutes><ChefRecipe></ChefRecipe></PrivateRoutes>,
       loader: ({params}) => fetch(`https://terrific-chef-server-side-mahadimhs787-gmailcom.vercel.app/chef/${params.id}`)
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
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}/></AuthProvider>
  </React.StrictMode>,
)
