
import axios from 'axios'
 import '../../stylin/app.css'
 import '../../stylin/style.css'
import React from 'react'

import { Outlet, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify'
import '../../stylin/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import validateRegister from './validationcontact/validationRegester';

 const Register=()=>{
  const [adduser,setAdduser]=useState([]);
  const[handlerErrorPassword,setHandlerErrorPassword]=useState('')
  const[handlerErrorEmail,setHandlerEmail]=useState('')
  const[handlerErrorConfirmPass,setHandlerErrorConfirmPass]=useState('')
  const[handlerErrorLink,setHandlerErrorLink]=useState('')
  const[handlerErrorName,setHandlerErrorName]=useState('')
  const[handlerErrorAge,setHandlerErrorAge]=useState('')
  const[loading,setLoading]=useState(true)
  const[checkEducation,setCheckEducation]=useState('')
  const[infopass,setInfopass]=useState('')
  const[infoemail,setInfoemail]=useState('')
  const[infoname,setInfoname]=useState('')
  const[buttonLoading,setButtonLoading]=useState(false)


  const navigate=useNavigate()

    

    // affiche matiere
    const [matiere,setMatiere]=useState([])
    useEffect(() => {
        displayMatiereFromData()
       }, [])
   const displayMatiereFromData=async()=>{

    try{
        const response= await axios.get(`http://localhost:1000/matiere?q=${name}`)
         setMatiere(response.data)
         setLoading(false)
       
     
    }
      
 catch(err){
    console.log(err)
    setLoading(false)
   
   
 }
   }

      //  add new use in the data base

        
        const [name,setName]=useState('')
        const [age,setAge]=useState()
        const [email,setEmail]=useState('')
        const [link,setLink]=useState('')
        const [password,setPassword]=useState('')
        const [confirmPassword,setConfirmPassword]=useState('')
        const [nameEducation, setNameEducation]=useState('')
        const [defaultval, setDefaultval]=useState('select your education')
        const[load ,setLoad]=useState(true)
        const[error,setError]=useState('')


        const[errorEmail,setErrorEmail]=useState('')
   
        
         
          
        const  changedval=(e)=>{
          
             const selectId=e.target.value
            
           
            
             {selectId!=='undefined'&& setNameEducation(selectId)}
            
       
      
        }
        
   
      
      const data={
        name:name,
        password:password,
        confirmPassword:confirmPassword,
        email:email,
        link:link,
        age:age,
        matiere:nameEducation

      }
      useEffect(()=>{
        if (nameEducation!==''||nameEducation!=='select your education') {
          setError('')
      
        }
      },[nameEducation])
 
    // ***********************validate register******************************

          
    useEffect(()=>{

      validateRegister.validateEmail(email,setInfoemail)
      validateRegister.validatePass(password,setInfopass)
      validateRegister.validatename(name,setInfoname)
    },[password,email,name])
    

 






      

      const newuser=async(e)=>{
      e.preventDefault()
    
        try{
          setButtonLoading(true)
       if (nameEducation!==''&&nameEducation!=='select your education') {
        setError('')
        const response=await axios.post('http://localhost:1000/addUser',data)
        if (response) {
         setTimeout(() => {
          window.location.assign('/login')
       
         }, 2000);
        
       
         
          toast.success(' registered is succefully')
          setButtonLoading(false)
          setError('')
        }
       
        
       
      
       }
       else  {
        setError('choose your education...')
        setButtonLoading(false)
     
           toast.warning('choose your education...')
       }
     
           
            
   
         
      
         
           
          
           
         
          setLoad(false) 
       
       
      }
        
         catch(err){
          setButtonLoading(false)
         toast.error('registration is failed')
        
          if (err.response.status===402) {
         setErrorEmail("email is already regestered try to use  another one")
       
            }
          if (err.response.status===403) {
           
              const messageError=err.response.data[0].path[0]
               const displayMessage=err.response.data[0].message.substring(messageError.length+2)
               console.log(messageError)
               if (messageError==="password") {
                setHandlerErrorPassword(displayMessage)
              
             }
             else{
              setHandlerErrorPassword('')
             }
             if (messageError==="name") {
              setHandlerErrorName(displayMessage)
          
              }
              else{
                setHandlerErrorName('')
              }
              if (messageError==="confirmPassword") {
                setHandlerErrorConfirmPass("confirm password is not true check it again")
            
                }
                else{
                  setHandlerErrorConfirmPass("") 
                }
                if (messageError==="email"&err.response.data[0].message==='"email" is not allowed to be empty') {

                  setErrorEmail("email is not allowed to be empty")
              
                  }
                  else if(messageError==="email"){
                    setErrorEmail("email is not  valid")
                  }
                  else{
                    setErrorEmail("")
                  }
                  if (messageError==="age") {
                    setHandlerErrorAge(displayMessage)
                
                    }
                    else{
                      setHandlerErrorAge('')
                    }
                    if (messageError==="link") {
                      setHandlerErrorLink(displayMessage)
                  
                      }
                      else{
                        setHandlerErrorLink('') 
                      }

            }
           
         }
       
      
      }
     
  
 
  return(

   <section className='bg bg-info pb-3'>
  <ToastContainer
    position='top-right' 
    pauseOnFocusLoss="false"
     limit={2}
    autoClose={2000}
    hideProgressBar={false}
    closeOnClick
    
    rtl={false}
    draggable={false}
    pauseOnHover={false}
  /> 
  <div className='container-fuild bg bg-primary py-3'>

    <div className='row'>
     <div className='col-sm-12'>
          <h6 className='text-center lightBlue fs-2 text-capitalize'>registration</h6>
          <div className='underLine4 m-auto '></div>
     </div>
    </div>

  </div>


  



    <div className="mt-3  bg bg-primary p-1 m-auto col-sm-6">
        

         
          
          <form className=" container  p-3  " >
            <div className='card shadow'>
           
             
        

           <div className='card-body'>
            <div className='row'>
            <h2 className='text-primary text-center'>student registeration</h2>
               <hr/>
            
          <div className="col-md-6">
          <label className="form-label">name <span className='errmsg'>*</span></label>
          <input type="text" className="form-control" placeholder="write your name" value={name} onChange={(e)=>setName(e.target.value)}  required/>
          {handlerErrorName &&
      
       
      <div className='d-flex mt-2'>
      <p className='text-danger'>name {handlerErrorName}</p>
      <FontAwesomeIcon className=' styleclose' icon={ faClose} onClick={()=>setHandlerErrorName('')}  />
    
      </div>
     }
     {infoemail &&name&&
      
       
      <div className='d-flex mt-2'>
      <p className='text-danger'>{infoname}</p>

    
      </div>
     }
      </div>
   <div className="col-md-6">
     <label  className="form-label">password <span className='errmsg'>*</span></label>
     <input type="text" className="form-control" placeholder="write your password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
     {handlerErrorPassword &&
      
       
      <div className='d-flex mt-2'>
      <p className='text-danger'>password {handlerErrorPassword }</p>
      <FontAwesomeIcon className=' styleclose' icon={ faClose} onClick={()=>setHandlerErrorPassword('')}  />
    
      </div>
     
    }
         {infopass &&password&&
      
       
      <div className='d-flex mt-2'>
      <p className='text-danger'> {infopass}</p>
      <FontAwesomeIcon className=' styleclose' icon={ faClose} onClick={()=>setInfopass('')}  />
    
      </div>
     
    }
   </div>
   <div className="col-md-6">
     <label  className="form-label">confirm password <span className='errmsg'>*</span></label>
     <input type="text" className="form-control" placeholder="write your password" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
     {handlerErrorConfirmPass &&
      
       
      <div className='d-flex mt-2'>
      <p className='text-danger'>{handlerErrorConfirmPass}</p>
      <FontAwesomeIcon className=' styleclose' icon={ faClose} onClick={()=>setHandlerErrorConfirmPass('')}  />
    
      </div>
     }
   </div>
   <div className="col-md-6">
     <label className="form-label">email <span className='errmsg'>*</span></label>
   
    
       <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required />
       {infoemail &&email&&
      
       
        <div className='d-flex mt-2'>
        <p className='text-danger'>{infoemail}</p>
        <FontAwesomeIcon className=' styleclose' icon={ faClose} onClick={()=>setInfoemail('')}  />
      
        </div>
       }
        {errorEmail &&
      
       
      <div className='d-flex mt-2'>
      <p className='text-danger'>{errorEmail}</p>
      <FontAwesomeIcon className=' styleclose' icon={ faClose} onClick={()=>setErrorEmail('')}  />
    
      </div>
     }
        
     
   </div>
   <div className="col-md-6">
     <label  className="form-label">age <span className='errmsg'>*</span></label>
     <input  className="form-control" placeholder="write your age" required value={age} onChange={(e)=>setAge(e.target.value)}/>
     {handlerErrorAge &&
      
       
      <div className='d-flex mt-2'>
      <p className='text-danger'>age {handlerErrorAge}</p>
      <FontAwesomeIcon className=' styleclose' icon={ faClose} onClick={()=>setHandlerErrorAge('')}  />
    
      </div>
     }
   </div>
   <div className='col-md-6' >
     <label className="form-label">image <span className='errmsg'>*</span></label>
     <input  type="text"  className='form-control' placeholder='put the link to your image' value={link} onChange={(e)=>setLink(e.target.value)}/>
     {handlerErrorLink &&
      
       
      <div className='d-flex mt-2'>
      <p className='text-danger'>link{handlerErrorLink}</p>
      <FontAwesomeIcon className=' styleclose' icon={ faClose} onClick={()=>setHandlerErrorLink('')}  />
    
      </div>
     }
    </div>
  
   <div className="col-md-4 ">
     <label  className="form-label">name of education <span className='errmsg'>*</span></label>
     <select type="select" className="form-select" onChange={(e)=>changedval(e)}  >
     <option selected>{defaultval}</option>
       {
         
        
         matiere.map((r)=>
         
            <option key={r._id} value={r._id}   >{r.name}
               
               </option>
               
         
         
       
         
       )
       }
      
       
     </select>
     {error && <p  className='text-danger mt-2'>{error}</p>}
     
   </div>
 
   <div className="col-12">
     <div className="form-check">
       <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
       <label className="form-check-label" for="invalidCheck">
         Agree to terms and conditions
       </label>
       <div className="invalid-feedback">
         You must agree before submitting.
       </div>
     </div>
   </div>
     <div className="card-footer">
      <button className="btn btn-primary" type="submit"onClick={(e)=>newuser(e)} >{ buttonLoading?"loading..." :"sign in"}</button>
       </div>
       </div>
        </div>
            </div>
         
          
              </form>
              
       
           <Outlet/>

        </div>
        </section>
        
  )



}
export default Register