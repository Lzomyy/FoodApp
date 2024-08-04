import { Link } from "react-router-dom"
import logo from "../../../../assets/Images/4 4.svg"
import { useForm } from "react-hook-form"
import axios from "axios"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import LoadingSpinner from "../../../Shared/Components/LoadingSpinner/LoadingSpinner";


export default function Login() {


  const {register, handleSubmit, formState: {errors}} = useForm()
  const [isLoading, setIsLoading] = useState(false)


  let submation = async(data) => {
    setIsLoading(true)
    return await axios.post(`https://upskilling-egypt.com:3006/api/v1/Users/Login`, data)
    .then( () => {
      setIsLoading(false)
      toast.success(`Logged successfully, Welcome back`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: {
          textAlign: "center", 
        },
        });
    })
    .catch( (err) => {
      setIsLoading(false)
      toast.error(`${err.response.data.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: {
          textAlign: "center", 
        },
        });
    })
  }


  return <>

  <ToastContainer/>

  <div className="col-md-6 bg-white rounded-3 pad-x py-5">

    <div className="text-center">
      <img src={logo} alt="logo"/>
    </div>

    <div className="py-2 mt-2 mb-4 text-center text-lg-start">
      <h3 className="fw-bold">Log In</h3>
      <span className="text-muted">Welcome Back! Please enter your details</span>
    </div>


    <form onSubmit={handleSubmit(submation)}>
      <div className="input-group mb-3 ">
        <span className="input-group-text px-3"><i className="fa-regular fa-envelope"></i></span>
        <input type="email" className="form-control bg-light py-2" placeholder="Enter your E-mail" {...register("email", {
          required: "email is required",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "enter a valid email"
          }
        })}/>
        {errors.email && <p className="alert alert-danger p-1 my-1 ps-2 w-100 rounded-3">{errors.email.message}</p>}
      </div>

      <div className="input-group">
        <span className="input-group-text px-3"><i className="fa-solid fa-lock"></i></span>
        <input type="password" className="form-control bg-light py-2" placeholder="Password" {...register("password", {
          required: "password is required",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            message: "Password must be 8 char, contains one capital & small letter"
          }
        })} />
        {errors.password && <p className="alert alert-danger p-1 my-1 ps-2 w-100 rounded-3">{errors.password.message}</p>}
      </div>

      <div className="d-flex justify-content-between mb-3">
        <Link to="/register" className="text-muted text-decoration-none">Register Now?</Link>
        <Link to="/forgetPassword" className="text-success text-decoration-none">Forget Password?</Link>
      </div>


      {isLoading ? <button className="btn bg-success fw-bold text-white d-block w-100"><LoadingSpinner/></button> :<button className="btn bg-success fw-bold text-white d-block w-100">Login</button>}
    </form>

    
  </div>
  
  
  </>
  
}



