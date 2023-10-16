import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Singup from './components/Singup.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import Users from './components/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-1zx0m2sdd-neorbislams-projects.vercel.app/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-1zx0m2sdd-neorbislams-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signup',
    element: <Singup></Singup>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: ()=> fetch('https://coffee-store-server-1zx0m2sdd-neorbislams-projects.vercel.app/user')

  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
