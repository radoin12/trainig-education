import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthService from '../service/auth.service';

import jwt from'jwt-decode'



export default function Logout() {
  const[user,setUser]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    setUser(jwt(AuthService.getCurrentUser().addToken))
  },[])
  console.log("userffffffffffffff",user)
   const cleanToken=()=>{
    AuthService.logout()
    navigate('/')
   }



  return (
    <div  className=' d-flex position-absolute top-0 end-0 'style={{width:"300px"}}  >
      {user&&<>
        <img  src={user.link}className='card-img-top img-fluid  rounded-circle px-2 ' style={{width:"80px"}}/>
       <h2 className='text-primary '>{user.name}</h2>
       <button type="submit" className='btn-bg-primary text-info text-center px-3 m-2 mt-1 rounded-2'style={{height:"50px"}} onClick={()=>{cleanToken()}}>logout</button>
       </>}
      </div>
     
    
  )
}
