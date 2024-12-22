import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home/Home.jsx';
import Login from './Page/Login/Login.jsx';
import Register from './Page/Register/Register.jsx'; 
import AuthProvider from "./Firebase/AuthProvider.jsx";
import Services from './Page/Services/Services';
import AddService from './Page/AddService/AddService';
import ManageService from './Page/ManageService/ManageService';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/addservice',
        element:<AddService/>
      },
      {
        path:'/manageservice',
        element:<ManageService/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode> 
     <AuthProvider>
    <RouterProvider router={router} /> 
     </AuthProvider>
  </StrictMode>,
)
