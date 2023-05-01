import React, { useState } from 'react';
import '../../../component/stylin/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faLocation,faAt} from '@fortawesome/free-solid-svg-icons';
import '../../stylin/app.css'
import validate from './validationcontact/validate';
import axios from 'axios';
import { useEffect } from 'react';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Contact() {
  const[load,setLoad]=useState(true)
  const[nameError,setNameError]=useState('')
  const[emailError,setEmailError]=useState('')
  const[phoneError,setPhoneError]=useState('')
  const[messageError,setMessageError]=useState('')
  const[data,setData]=useState({
    name:"",
    email:"",
    phone:"",
    message:"",
    buttonLoading:false
    
  })

  useEffect(() => {
    validate.validateName(data.name,setNameError)
    validate.validatePhone(data.phone,setPhoneError)
    validate.validateEmail(data.email,setEmailError)
    validate.validateMessage(data.message,setMessageError)
    
  }, [data.name,data.phone,data.email,data.message]);







 


  const sendEmail=async (e)=>{
   e.preventDefault()
   setData({...data,buttonLoading:true})

   
   try{
    if(!nameError&!messageError&!emailError&!phoneError) {
    const response=await axios.post('http://localhost:1000/contactus',{
      name:data.name,
      email:data.email,
      phone:data.phone,
      message:data.message

    })
   
     console.log(response)
     setLoad(false)

     if (response) {
      toast.success('message has been sent')
      setData({...data,buttonLoading:false,name:'',phone:'',email:'',message:''})
    
     }
 


  
   }
   else{
    if(emailError)
    {toast.warning(emailError)}
     if(nameError)
      {toast.warning(nameError)}
      if(phoneError)
      {toast.warning(phoneError)}
      if(messageError)
      {toast.warning(messageError)}
      setData({...data,buttonLoading:false})
   }
   
   
  }
   catch(err){
    console.log(err)
   setLoad(false)
   toast.error(
    err.response&& err.response.data.message?err.response.data.message
    :err.message
   )
   }
 
}
     

  return (
   
    <section className='bg bg-info '>
     
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
     
         <div className='container-fuild bg bg-primary'>
         <div className='row'>
            <div className='col-sm-12 py-4'>
                <h5 className='lightBlue text-center fs-2 text-capitalize '>contact us</h5>
                <div className='underLine4   m-auto'></div>
            </div> 
         </div>
        </div>
        <div className='sectionHome container bg bg-info py-3 mt-5'>
            <div className='card shadow bg bg-secondary'>
                <div className='card-body'>
                 <div className='row'>
                   <div className='col-sm-6 border-end'>
                    <h6 className='lightBlue text-center fs-3 text-capitalize'>contact us</h6>
                      <hr className='text-white '/>
                    <form onSubmit={sendEmail}>
                        <div className='form-group'>
                        <label className='form-label text-white'>Full Name</label>
                        <input  required type="text" className='form-control' placeholder='enter your name' value={data.name}
                         onChange={
                          (e)=> setData({...data,name:e.target.value})
                        }></input>
                         {data.name&&<p className='textCOLOR mt-2 fs-6 text-nowrap text-lowercase '>{nameError}</p> }
                        </div>
                        <div className='form-group'>
                        <label className='form-label text-white'>email</label>
                        <input required  type="email" className='form-control' placeholder='enter your email' value={data.email}
                         onChange={
                          (e)=> setData({...data,email:e.target.value})
                           } ></input>
                            {data.email&&<p className='textCOLOR mt-2 fs-6 text-nowrap text-lowercase '>{emailError}</p> }
                        </div>
                        <div className='form-group'>
                        <label className='form-label text-white'>phone</label>
                        <input className='form-control' placeholder='enter your phone'value={data.phone}
                         onChange={
                          (e)=> setData({...data,phone:e.target.value})
                           }required></input>
                          {data.phone&&<p className=' mt-2 fs-6 text-nowrap text-lowercase textCOLOR'>{phoneError}</p> }
                        </div>
                        <div className='form-group'>
                        <label className='form-label text-white'>message</label>
                        <textarea rows="3" placeholder='enter your message' className='form-control'value={data.message}
                         onChange={
                          (e)=> setData({...data,message:e.target.value})
                           }required></textarea>
                            {data.message&&<p className='textCOLOR mt-2 fs-6 text-nowrap text-lowercase fw-bold'>{messageError}</p> }
                        </div>
                        <div className='form-group py-3'>
                        <button  disabled={data.buttonLoading} type="submit" className='btn btn-primary w-100 '>{data.buttonLoading?'loading...':' send message'}</button>
                        </div>
                        
                       
                    </form>
                   </div>
                   <div className='col-sm-6'>
                   <h2 className='lightBlue text-center fs-3 text-capitalize'> information</h2>
                   <div className='underLine3   m-auto'></div>
                   
                   <div className='d-flex justify-content-center py-3' >
              <FontAwesomeIcon icon={faPhone} className=" px-2 pt-1"></FontAwesomeIcon>
           
            <p className='text-white'>phone:</p>
            <p className='text-white' >58686889</p>
          </div>
          <div className='d-flex justify-content-center' >
          <FontAwesomeIcon icon={faLocation} className=" px-2 pt-1"></FontAwesomeIcon>
           
            <p className='text-white'>adresse:</p>
            <p className='text-white' >rue 1258 nabel </p>
          </div>
          <div className='d-flex justify-content-center' >
          <FontAwesomeIcon icon={faAt} className=" px-2 pt-1"></FontAwesomeIcon>
           
            <p className='text-white'>email: </p>
            <p className='text-white' >gmail@domaine.com</p>
          </div>


                   </div>
                 </div>
                </div>

            </div>

        </div>
   
   
   
   
       <div className='sectionHome'>
      
       </div>
    </section>
 
  );
}
