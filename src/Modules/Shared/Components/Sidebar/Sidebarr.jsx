import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../../../assets/Images/3.png"




export default function Sidebarr() {


  const [isCollapsed, setIsCollapsed] = useState(false);
  let Navigator = useNavigate()



  const letOut = () => {
    localStorage.removeItem('tkn');
    Navigator("/")
  }

  return (
    <>
      <div className="sidebar-container text-white">
        <Sidebar collapsed = {isCollapsed}>
          <Menu>
            <MenuItem className="image-toggler my-5 ps-1" icon={<img src={icon} alt="" />} onClick={() => setIsCollapsed( (prev) => !prev )}></MenuItem>
            <span className="sr-only">Home Icion</span>
            <MenuItem icon={<i aria-hidden="true" className="fa-solid fa-house"></i>} component={<Link to="/dashboard/Home" />}>Home</MenuItem>
            <span className="sr-only">Users Icion</span>
            <MenuItem icon={<i aria-hidden="true" className="fa-solid fa-users"></i>} component={<Link to="/dashboard/Users" />}>Users</MenuItem>
            <span className="sr-only">Recipes Icion</span>
            <MenuItem icon={<i aria-hidden="true" className="fa-solid fa-bowl-food"></i>} component={<Link to="/dashboard/Recipes-List" />}>Recipes</MenuItem>
            <span className="sr-only">Categories Icion</span>
            <MenuItem icon={<i aria-hidden="true" className="fa-solid fa-table"></i>} component={<Link to="/dashboard/Categories-List" />}>Categories</MenuItem>
            <span className="sr-only">Logout Icion</span>
            <MenuItem onClick={ () => letOut() } icon={<i aria-hidden="true" className="fa-solid fa-right-from-bracket"></i>} >Logout</MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
