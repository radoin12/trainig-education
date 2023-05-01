
import React from 'react';
import '../../stylin/style.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
import CommentUser from './commentUser';

import { Link } from 'react-router-dom';
export default function HomeStudent()  {
  const [matiere,setMatiere]=useState([])
  const[load,setLoad]=useState(true)
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





// user display
const[testComment,setTestcomment]=useState()
useEffect(() => {
 
  profilo()


}, [load]);


const profilo=async()=>{
try{
  const user=JSON.parse(localStorage.getItem('user'))
  
  const d=await axios.get('http://localhost:1000/information',
  
  {
    headers:{
    "Content-Type":"application/json",
   
    Authorization: "Bearer "+user.addToken,
     }
  })
  if (d) {
         console.log(d)
         setTestcomment(d.data)
         setLoad(false)
       }
   
}
catch(err){
console.log(err,"fffffffff")
setLoad(false)
}

}






  return (
    <div className='sectionHome bg bg-ligth border-top ' id='service'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center mb-3'>
            <h2 className='text-danger '>services</h2>
            <div className='underLine m-auto'></div>
          </div>
         {matiere&&
          matiere.map((data)=>
          
          
          
          data.prof&&<div className='col-md-4 mt-3' >
            
           
          <div className='card shadow' style={{height:"850px"}}>
           <img src={data.file} className="w-100 border-bottom" style={{height:"200px"}}/>
         
           <div className='card-header' >

           <h2 className='text-secondary fs-7 text-center '>{data.name}</h2>
           <div className='underLine m-auto'></div>
           <p className=' text-capitalize fs-6 lh-base mt-4'>price:{data.price} D</p>
           <p className=' text-capitalize fs-6 lh-base mt-4'>level:{data.level} </p>
           <p className=' text-capitalize fs-6 lh-base mt-4'>
            this education will be started At: <span  className='px-2 text-secondary'>{data.dateInitial.substring(0,10)
                     }</span></p>
           <p className=' text-capitalize fs-6 lh-base mt-4'>number of hours: {data.numberHour} H</p>
           </div>

          { data.prof&&<div className='card-body' >
           <h2 className='text-secondary fs-7 text-center '>info about our teatchers</h2>
           <div className='underLine m-auto mb-2'></div>
           <img src={data.prof.image} className="w-100 border-bottom" style={{height:"200px"}}/>
          
           
           <p className=' text-capitalize fs-6 lh-base mt-4'>name:{data.prof.name}</p>
           <p className=' text-capitalize fs-6 lh-base mt-4'>experience:{data.prof.experience}<span>ans</span> </p>
           
           </div>}
          </div>
        
       
     
    </div>
          
          
          
          )
         
        }

       


         





        </div>
      </div>
      <CommentUser/>
      
   
      
    
         
        
         
     
      
     
     
      
    
    

    </div>
  );
}