import { useNavigate } from "react-router"
import { Outlet, NavLink } from "react-router-dom";
import Logout from "./logout";
import Serv from "./serv";
export default function Main() {
   
 

    return(

      <div className="bg bg-secondary p-3 h-100">
      <nav className="navbar navbar-expand-lg bg-light m-b-5 ">
      <div className="container-fluid ">
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <NavLink to="/homeuser" className="nav-link">home</NavLink>  
          </li>
          <li className="nav-item " >
            <NavLink to="profile" className="nav-link">details</NavLink>
          </li>
          <li className="nav-item ">
           <Logout/>
          </li>
         
          
        

       </ul>
        </div>

     
       </div>



      
       </nav> 
        <Outlet /> 
   </div>

    )
}