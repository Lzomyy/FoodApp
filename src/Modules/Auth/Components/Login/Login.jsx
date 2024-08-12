/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import LoadingSpinner from "../../../Shared/Components/LoadingSpinner/LoadingSpinner";
import { API_URLs } from "../../../../CONSTANT/URLs";
import LogoInForm from "../LogoInForm/LogoInForm";
import { validations } from "../../../../CONSTANT/VALIDATION";


export default function Login( { saveLoginData } ) {


  const {register, handleSubmit, formState: {errors}} = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [isPasswordVisiable, setisPasswordVisiable] = useState(false)
  const Navigator = useNavigate()


  let submation = async(data) => {
    setIsLoading(true)
    return await axios.post( API_URLs.login , data)
    .then( async(res) => {
    localStorage.setItem('tkn', res.data.token)
    await saveLoginData()
    setIsLoading(false)
    toast.success(`Logged successfully, Welcome back`, {
      position: "top-center",
      autoClose: 1000,
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
    Navigator("/dashboard")

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

    <LogoInForm/>

    <div className="py-2 mt-2 mb-4 text-center text-lg-start">
      <h3 className="fw-bold">Log In</h3>
      <span className="text-muted">Welcome Back! Please enter your details</span>
    </div>


    <form onSubmit={handleSubmit(submation)}>
      <div className="input-group mb-3 ">
        <span className="sr-only">Email Icion</span>
        <span className="input-group-text px-3"><i className="fa-regular fa-envelope" aria-hidden="true" ></i></span>
        <input type="email" className="form-control bg-light py-2" placeholder="Enter your E-mail" {...register("email", validations.email) }/>
        {errors.email && <p className="alert alert-danger p-1 my-1 ps-2 w-100 rounded-3">{errors.email.message}</p>}
      </div>

      <div className="input-group">
        <span className="sr-only">Password Icion</span>
        <span className="input-group-text px-3"><i className="fa-solid fa-lock" aria-hidden="true"></i></span>
        <input type={isPasswordVisiable ? "text" : "password"} className="form-control bg-light py-2" placeholder="Password" {...register("password", {required: "password is required",})} />
        {errors.password && <p className="alert alert-danger p-1 my-1 ps-2 w-100 rounded-3">{errors.password.message}</p>}
        <button type="button"
        className="input-group-text px-3" 
        onClick={ () => setisPasswordVisiable( (prev) => !prev  ) } 
        onMouseDown={ (e) => e.preventDefault()} onMouseUp={ (e) => e.preventDefault() }>
        {isPasswordVisiable ? <i className="fa-solid fa-eye" aria-hidden="true"></i> : <i className="fa-solid fa-eye-slash" aria-hidden="true"></i> }
        </button>
      </div>

      <div className="d-flex justify-content-between mb-3 login-form">
        <Link to="/register" className="text-muted text-decoration-none">Register Now?</Link>
        <Link to="/forget-Password" className="text-success text-decoration-none">Forget Password?</Link>
      </div>


      {isLoading ? <button className="btn bg-success fw-bold text-white d-block w-100"><LoadingSpinner/></button> :<button className="btn bg-success fw-bold text-white d-block w-100">Login</button>}
    </form>


    
  </div>
  
  
  </>
  
}



