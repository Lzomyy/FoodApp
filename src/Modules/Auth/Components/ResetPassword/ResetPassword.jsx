import logo from "../../../../assets/Images/4 4.svg"
import { useForm } from "react-hook-form"
import axios from "axios"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import LoadingSpinner from "../../../Shared/Components/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";


export default function ResetPassword() {


  const {register, handleSubmit, formState: {errors}} = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const Navigator = useNavigate()

  let submation = async(data) => {
    setIsLoading(true)
    return await axios.post(`https://upskilling-egypt.com:3006/api/v1/Users/Reset`, data)
    .then( (res) => {
      setIsLoading(false);
      console.log(res);
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
      Navigator("/")
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
      <h3 className="fw-bold"> Reset  Password</h3>
      <span className="text-muted">Please Enter Your Otp or Check Your Inbox</span>
    </div>


    <form onSubmit={handleSubmit(submation)} className="d-flex flex-wrap justify-content-between align-items-center">


      <div className="input-group mb-3">
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

      <div className="input-group mb-3">
        <span className="input-group-text px-3"><i className="fa-solid fa-key"></i></span>
        <input type="text" className="form-control bg-light py-2" placeholder="OTP" {...register("seed", {
          required: "email is required",
        })}/>
        {errors.seed && <p className="alert alert-danger p-1 my-1 ps-2 rounded-1 w-100">{errors.seed.message}</p>}
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text px-3"><i className="fa-solid fa-lock"></i></span>
        <input type="password" className="form-control bg-light py-2" placeholder="Password" {...register("password", {
          required: "password is required",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            message: "password must include at least one lowercase & uppercase letter, one digit, one special character, and be at least 6 characters long"
          }
        })} />
        {errors.password && <p className="alert alert-danger p-1 my-1 ps-2 rounded-1 w-100">{errors.password.message}</p>}
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text px-3"><i className="fa-solid fa-lock"></i></span>
        <input type="password" className="form-control bg-light py-2" placeholder="confirm-password" {...register("confirmPassword", {
          required: "password is required",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            message: "password must include at least one lowercase & uppercase letter, one digit, one special character, and be at least 6 characters long"
          }
        })} />
        {errors.confirmPassword && <p className="alert alert-danger p-1 my-1 ps-2 rounded-1 w-100">{errors.confirmPassword.message}</p>}
      </div>


      {isLoading ? <button className="btn bg-success fw-bold text-white d-block w-100"><LoadingSpinner/></button> :<button type="submit" className="btn bg-success fw-bold text-white d-block w-100">Submit</button>}
    </form>

    
  </div>
  
  
  </>
  
}



