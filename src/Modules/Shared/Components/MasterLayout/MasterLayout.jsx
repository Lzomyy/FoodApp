import { Outlet } from 'react-router-dom'
import Sidebarr from '../Sidebar/Sidebarr'
import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react'

export default function MasterLayout({  loginData, saveLoginData }) {


  useEffect( function () {
    saveLoginData()
  }, [])


  return <>
    <div className="container-fluid">
      <div className="d-flex">
        <div className="">
          <Sidebarr/>
        </div>
        <div className="w-100">
          <Navbar loginData={loginData}/>
          <Outlet/>
        </div>
      </div>
    </div>
  </>
}
