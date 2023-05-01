
import { Outlet, NavLink } from "react-router-dom";

import '../../stylin/style.css'
import Footer from "./inc/footer";
import axios from "axios";
import { useState,useEffect } from "react";

function MainPublic() {
   
 // search matiere
 const[load,setLoad]=useState('')



//  display matiere from the data base with connection server 
const [matiere,setMatiere]=useState([])
useEffect(() => {
  displayMatiereFromData()
 }, [])
const displayMatiereFromData=async()=>{
try{
  const response= await axios.get('http://localhost:1000/matiere')
   setMatiere(response.data)
 
   setLoad(false)
}

catch(err){
console.log(err)
setLoad(false)
}
}


   
    return(
 
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-dark px-3">
       <div className="container-fluid ">
         <div className="collapse navbar-collapse">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item parentmove">
            <NavLink to="/" className="nav-link active spacing text-white" aria-current="page">home</NavLink>  
            <div  className="underline1"></div>
           </li>
          


           <li class="nav-item dropdown parentmove">
          <NavLink className="nav-link dropdown-toggle spacing text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           service
          </NavLink>
          <div className="underline1"></div>
          <ul className="dropdown-menu bg bg-primary">
            <li className="dropdown-item "><NavLink to='admin' className="dropdown-item text-white bg bg-dark text-center">Action</NavLink></li>
      
          
            <li className="dropdown-item"><NavLink className="dropdown-item text-white bg bg-dark text-center">Something else here</NavLink></li>
          </ul>
        </li>
           <li className="nav-item parentmove">
            <NavLink to="/about" className="nav-link spacing text-white">about us</NavLink>  
            <div className="underline1"></div>
           </li>
           <li className="nav-item  parentmove">
            <NavLink to="/contact" className="nav-link spacing text-white">contact us</NavLink>  
            <div className="underline1"></div>
           </li>
           <li className="nav-item parentmove">
            <NavLink to="/registration" className="nav-link spacing text-white ">registration</NavLink>  
            <div  className="underline1"></div>
           </li>
         

        </ul>
         </div>

      
        </div>


    
        </nav> 
         <Outlet /> 
         <Footer/>
    </div>

    )
}

export default  MainPublic