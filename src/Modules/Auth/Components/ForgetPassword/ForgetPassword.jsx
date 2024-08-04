import logo from "../../../../assets/Images/4 4.svg"
import { useForm } from "react-hook-form"
import axios from "axios"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import LoadingSpinner from "../../../Shared/Components/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";


export default function ForgetPassword() {


  const {register, handleSubmit, formState: {errors}} = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const Navigator = useNavigate()


  let submation = async(data) => {
    setIsLoading(true)
    return await axios.post(`https://upskilling-egypt.com:3006/api/v1/Users/Reset/Request`, data)
    .then( (res) => {
      setIsLoading(false);
      console.log(res.data.message);
      toast.success(`${res.data.message}`, {
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

      setTimeout( () => {
        Navigator("/resetPassword")
      }, 2000)

    })
    .catch( (err) => {
      setIsLoading(false);
      console.log(err.response.data.message);
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
      <h3 className="fw-bold">Forgot Your Password?</h3>
      <span className="text-muted">No worries! Please enter your email and we will send a password reset link </span>
    </div>


    <form onSubmit={handleSubmit(submation)} className="d-flex flex-wrap justify-content-between align-items-center">


      <div className="input-group mb-5">
        <span className="input-group-text px-3"><i className="fa-regular fa-envelope"></i></span>
        <input type="email" className="form-control bg-light py-2" placeholder="Enter your E-mail" {...register("email", {
          required: "email is required",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "enter a valid email"
          }
        })}/>
        {errors.email && <p className="alert alert-danger p-1 my-1 ps-2 rounded-1 w-100">{errors.email.message}</p>}
      </div>


      {isLoading ? <button className="btn bg-success fw-bold text-white d-block w-100"><LoadingSpinner/></button> :<button type="submit" className="btn bg-success fw-bold text-white d-block w-100">Submit</button>}
    </form>

    
  </div>
  
  
  </>
  
}



