
import React from 'react';
import { useState, useEffect } from 'react';
import'../../stylin/app.css'
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import AuthService from '../service/auth.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useNavigate,Navigate } from 'react-router';

import { faEnvelope ,faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
 import instance from '../service/api';






export default function Loginuser() {
  const navigate=useNavigate()
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPass: false,
      
      
    });
    const[errors,setErrors]=useState(null)
    const[succes,setSucces]=useState(null)
    const[load,setLoad]=useState(true)

  

  console.log(errors)
  
    // login user
  

 
  const handleLogin=(e)=>{
 
         e.preventDefault();
      
         try{
           
         return  axios.post('http://localhost:1000/login',{
              password:values.password  ,email:values.email
            })
           .then((response)=>{
    
            if (response.data.addToken) {
                // localStorage.setItem('user',JSON.stringify(response.data))
                AuthService.setUser(response.data)
             
                 setTimeout(() => {
                  window.location.assign('/homeuser')
                 }, 500);
                 setSucces('succefully')
               
              
                
             
              }
              else{
                setTimeout(() => {
                  window.location.reload()
                 }, 500);
                  
                 setErrors(response.data)
              
                 
              }
               })
             
  
       }
       catch(err){
          
           
          setErrors("err",err) 
             
              
          
       }
         
    
     
    
    
      
          
      
  }


      



 
       
    


 
  

    
    
 


  return (
    <div className='p-2 mt-5'  style={{height:"550px"}} >
     <div className='mt-5'>
        <form className='container card w-50  mx-auto p-3 bg bg-primary' >
            <div className=' card-body  bg bg-info p-4 mb-3 m-auto rounded-4' style={{width:"550px"}}>

              <div className='row mb-3 mt-5 '>
             
            <label className=' form-label col-md-3  textStyleLbael'>email</label>
            <div className='col-md-6'>
            <input className='form-control' value={values.email}onChange={(e) => setValues({ ...values, email: e.target.value })}></input>
            </div>
            </div>


            <div className='row mb-3  '>
              
                 <label  className=' form-label col-md-3  textStyleLbael'>password</label>
                 <div className='col-md-6 position-relative  '>
                 <input type={values.showPass ? "text"  : "password"}
                className='form-control 'value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })}/>
                   
               
                {values.showPass==true?<FontAwesomeIcon icon={faEye} className='col-md-1  text-dark position-absolute bottom-0 end-0 translate-middle text-primary blue ' onClick={()=>setValues({...values,showPass:false})}></FontAwesomeIcon>: <FontAwesomeIcon icon={faEyeSlash} className='col-md-1 mt-2 text-dark  position-absolute bottom-0 end-0 translate-middle text-primary'onClick={()=>setValues({...values,showPass:true})}></FontAwesomeIcon>}
                </div>
              
               
              
               
               
              
           
            </div>
            <div className="form-group">
           <p className='text-danger text-center'></p>
            <button  type="submit" className='btn btn-primary col-md-2 m-auto mb-2 text-center shadow  bg-primary rounded'onClick={(e)=>handleLogin(e)}>login</button>
             {errors!==null?<p className='errorPara'>{errors}</p>:<p></p>}
             {succes!==null?<p className='successPara'>{succes}</p>:<p></p>}
           
            </div>
              
             
          
            </div>
                    
                    
                  
               
            
      

        </form>
           
     </div>
     



    </div>
  )
}
