import React from 'react';
import { Outlet, Link ,NavLink} from "react-router-dom";
import { useState } from 'react';
export default function Layout() {
const[searchMat,setSearchMat]=useState('')
return(
    <div>
    
 
    <nav className="navbar navbar-expand-lg bg-light">
 <div className="container-fluid">
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">    
         <Link to="/admin"    className="nav-link active" aria-current="page">home</Link>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">services</a>
       </li>
       <li className="nav-item dropdown">
         <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           activity
         </Link>
         <ul class="dropdown-menu">
           <li  className="dropdown-item">
           <Link to="addMatiere" state={{
            search:searchMat
           }}className="dropdown-item" >add new matiere</Link>
           </li>
           <li className="dropdown-item"><Link to="teacher" className="dropdown-item" >add new teatcher</Link></li>
         
       
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link to="/admin" className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          details
        </Link>
        <ul className="dropdown-menu">
          <li className="dropdown-item">
          <Link to="displayUser" className="dropdown-item">display student</Link>
          </li>
          <li className="dropdown-item"><Link to="#" className="dropdown-item" >dispaly teatcher</Link></li>        
         <li className="dropdown-item"><Link to="#" className="dropdown-item">display book book</Link></li>
       </ul>
     </li>
   </ul>
     <form className="d-flex" role="search">
       <input className="form-control me-2" type="search" placeholder="Search your education" aria-label="Search" 
        onChange={(e)=>{
          e.preventDefault()
          setSearchMat(e.target.value)
        }}
       />
       {      
       
      
      <>
       <NavLink  to={'addMatiere'} state={{search:searchMat}}><button className="btn btn-outline-success"  type="submit">Search</button></NavLink>
       
      </>
       
       
      }
       
     </form>
   </div>
 </div>
 </nav> 
    
<Outlet/>
    </div>
)


   
  
}




