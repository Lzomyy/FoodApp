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





function App() {

  const myRouters = createBrowserRouter([
  {
  path: "",
  element: <AuthLayout/>,
  errorElement: <NotFound/>,
  children: [
    { index: true, element: <Login/>},
    { path: 'Login', element: <Login/>},
    { path: 'Register', element: <Register/>},
    { path: 'ForgetPassword', element: <ForgetPassword/>},
    { path: 'ResetPassword', element: <ResetPassword/>},
  ]
  },


  {
  path: "dashboard",
  element: <MasterLayout/>,
  errorElement: <NotFound/>,
  children: [
    {index:  true, element: <Home/>  },
    {path: 'Home', element: <Home/> },
    {path: 'RecipesList', element: <RecipesList/> },
    {path: 'CategoriesList', element: <CategoriesList/> },
    {path: 'Users', element: <Users/> },

  ]
  }





])




  return <>
  <RouterProvider router={myRouters}/>
  
</>

}

export default App
