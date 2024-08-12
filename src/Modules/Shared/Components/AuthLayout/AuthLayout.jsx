import { Navigate, Outlet } from 'react-router-dom'

export default function AuthLayout() {


  if (localStorage.getItem('tkn')) {
    return <Navigate to={"/dashboard"}/>
  }



  return <>
    <div className='auth-container'>
      <Outlet/>
    </div>
    </>
}
