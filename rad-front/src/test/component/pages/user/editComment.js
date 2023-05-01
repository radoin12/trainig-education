


import React from 'react';
import'../../stylin/style.css'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';

import { useState ,useEffect} from 'react';

export default function EditComment() {


     // up date comment
     const location =useLocation()
     useEffect(() => {
      setChangeContent(location.state.content)
     }, []);
  const [changeContent,setChangeContent]=useState('')
  const {id}=useParams()
 console.log(changeContent ,"new value okito")
  const navigate=useNavigate()
  const data={
    content: changeContent
  }
  const updatecomment=async(e)=>{
   
    const user=JSON.parse(localStorage.getItem('user'))
 try {
    e.preventDefault()
    if (user.addToken) {
       fetch(`http://localhost:1000/updatecomment/${id}`,{
           method:'put',
          headers:{
                Authorization: "Bearer "+user.addToken,
                'content-type':'application/json'
            },
            body:JSON.stringify(data)    
           })
         .then((resp)=>{
            if (!resp.ok) {
                console.log('something wrong happened')
                
            }
            return resp.json()
          
         })
         .then((data)=>console.log(data))

        .catch((err)=>console.log(err))
        navigate(-1)
       
    }


 } 
 catch (error) {
  console.log(error)
 }
 console.log(changeContent)
  }
  return (
    <div className='sectionHome containermt-5 border-top-4 bgstyle'>
      <form className='form-input'>
        <div className='row'>
        <h2 className='text-center text-success fs-5  '>up date your comment</h2>
            <div className='col-md-4 d-flex mt-4'>
           
      
          <label className='text-success form-label fs-5  px-2'>content</label>
          <input className='form-control' value={changeContent} onChange={(e)=>{
                    setChangeContent(e.target.value)
                    e.preventDefault()
   
         }}/>
      
            </div>
    
        </div>
        <button type='submit' onClick={(e)=>updatecomment(e)}>up date</button>
   

      </form>
    </div>
  );
}
