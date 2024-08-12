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

export default function Register() {


  const {register, handleSubmit, watch, formState: {errors}} = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const Navigator = useNavigate()


  let submation = async(data) => {
    setIsLoading(true)
    return await axios.post( API_URLs.register , data)
    .then( (res) => {
      setIsLoading(false);
      console.log(res?.data?.message);
      toast.success(`Account created successfully, Verify your email`, {
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
      <h3 className="fw-bold">Register</h3>
      <span className="text-muted">Welcome Back! Please enter your details</span>
    </div>


    <form onSubmit={handleSubmit(submation)} className="d-flex flex-wrap justify-content-between align-items-center">

      <div className="input-group w-45 mb-3">
        <span className="sr-only">userName Icion</span>
        <span className="input-group-text px-3"><i aria-hidden="true" className="fa-solid fa-user"></i></span>
        <input type="text" className="form-control bg-light py-2" placeholder="UserName" {...register("userName", validations.userName)}/>
        {errors.userName && <p className="alert alert-danger p-1 my-1 ps-2 rounded-1 w-100">{errors.userName.message}</p>}
      </div>

      <div className="input-group w-45 mb-3 ">
        <span className="sr-only">email Icion</span>
        <span className="input-group-text px-3"><i aria-hidden="true" className="fa-regular fa-envelope"></i></span>
        <input type="email" className="form-control bg-light py-2" placeholder="Enter your E-mail" {...register("email", validations.email)}/>
        {errors.email && <p className="alert alert-danger p-1 my-1 ps-2 rounded-1 w-100">{errors.email.message}</p>}
      </div>


      <div className="input-group w-45 mb-3 ">
        <span className="sr-only">country Icion</span>
        <span className="input-group-text px-3"><i aria-hidden="true" className="fa-solid fa-earth-africa"></i></span>
        <input type="text" className="form-control bg-light py-2" placeholder="Country" {...register("country", {
          required: "country is required",
        })}/>
        {errors.country && <p className="alert alert-danger p-1 my-1 ps-2 rounded-1 w-100">{errors.country.message}</p>}
      </div>


      <div className="input-group w-45 mb-3 ">
        <span className="sr-only">phoneNumber Icion</span>
        <span className="input-group-text px-3"><i aria-hidden="true" className="fa-solid fa-mobile"></i></span>
        <input type="text" className="form-control bg-light py-2" placeholder="Phone Number" {...register("phoneNumber", {
          required: "phoneNumber is required",
        })}/>
        {errors.phoneNumber && <p className="alert alert-danger p-1 my-1 ps-2 rounded-1 w-100">{errors.phoneNumber.message}</p>}
      </div>




      <div className="input-group w-45 mb-3">
        <span className="sr-only">password Icion</span>
        <span className="input-group-text px-3"><i aria-hidden="true" className="fa-solid fa-lock"></i></span>
        <input id="password" type="password" className="form-control bg-light py-2" placeholder="Password" {...register("password", validations.password )} />
        {errors.password && <p className="alert alert-danger p-1 my-1 ps-2 rounded-1 w-100">{errors.password.message}</p>}
      </div>


      <div className="input-group w-45">
        <span className="sr-only">password Icion</span>
        <span className="input-group-text px-3"><i aria-hidden="true" className="fa-solid fa-lock"></i></span>
        <input type="password" className="form-control bg-light py-2" placeholder="confirm-password" {...register("confirmPassword", {
            validate: (value) =>
              value === watch("password") || "The passwords do not match" 
        })} />
        {errors.confirmPassword && <p className="alert alert-danger p-1 my-1 ps-2 rounded-1 w-100">{errors.confirmPassword.message}</p>}
      </div>




      <div className="mb-3 w-100 login-form">
        <Link to="/" className="text-success text-decoration-none">Login Now?</Link>
      </div>


      {isLoading ? <button className="btn bg-success fw-bold text-white d-block w-100"><LoadingSpinner/></button> :<button type="submit" className="btn bg-success fw-bold text-white d-block w-100">Register</button>}
    </form>

    
  </div>
  
  
  </>
  
}



