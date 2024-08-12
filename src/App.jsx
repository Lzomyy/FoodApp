import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AuthLayout from './Modules/Shared/Components/AuthLayout/AuthLayout'
import Login from './Modules/Auth/Components/Login/Login'
import Register from "./Modules/Auth/Components/Register/Register"
import ForgetPassword from "./Modules/Auth/Components/ForgetPassword/ForgetPassword"
import ResetPassword from "./Modules/Auth/Components/ResetPassword/ResetPassword"
import NotFound from "./Modules/Shared/Components/NotFound/NotFound"
import MasterLayout from "./Modules/Shared/Components/MasterLayout/MasterLayout"
import Home from "./Modules/Home/Components/Home/Home"
import RecipesList from "./Modules/Recipes/Components/RecipesList/RecipesList"
import CategoriesList from "./Modules/Categories/Components/CategoriesList/CategoriesList"
import Users from "./Modules/Users/Components/Users/Users"
import { jwtDecode } from 'jwt-decode'
import ProtectedRoute from './Modules/Shared/Components/ProtectedRoute/ProtectedRoute'
import {  useState } from 'react'
import { ToastContainer } from 'react-toastify'





function App() {

  const [loginData, setLoginData] = useState(null)

  let saveLoginData = () => {
    let Token = localStorage.getItem('tkn')
    const decodedToekn = jwtDecode(Token)
    console.log(decodedToekn);
    setLoginData(decodedToekn);
  }




  const myRouters = createBrowserRouter([
  {
  path: "",
  element: <AuthLayout/>,
  errorElement: <NotFound/>,
  children: [
    { index: true, element: <Login saveLoginData={saveLoginData}/>},
    { path: 'Login', element: <Login saveLoginData={saveLoginData}/>},
    { path: 'Register', element: <Register/>},
    { path: 'Forget-Password', element: <ForgetPassword/>},
    { path: 'Reset-Password', element: <ResetPassword/>},
  ]
  },


  {
  path: "/dashboard",
  element: <ProtectedRoute loginData= {loginData}> <MasterLayout loginData={loginData} saveLoginData={saveLoginData}/>  </ProtectedRoute>,
  errorElement: <NotFound/>,
  children: [
    {index:  true, element:   <Home/>   },
    {path: 'Home', element:   <Home/> },
    {path: 'Recipes-List', element: <RecipesList/> },
    {path: 'Categories-List', element: <CategoriesList/> },
    {path: 'Users', element: <Users/> },

  ]
  }





])




  return <>
  <ToastContainer />
  <RouterProvider router={myRouters}/>

</>

}

export default App
