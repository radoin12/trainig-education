import React, { useState , useEffect} from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router';



export default function Serv() {

 const navigate=useNavigate()
 const [info,setInfo]=useState()
 const[load,setLoad]=useState()


   // PrivateInfo.getPriveteProfile()
    // .then((response)=>{
    //   if (response) {
    //     console.log(response)
    //     setInfo(response.data)
    //   }
   
     
    // })
    // .catch((err)=>{
    
    //   console.log("err",err)
   
     
    // })
 useEffect(() => {
 
    profilo()
  

 }, []);
 

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
           setInfo(d.data)
         }
     
  }
 catch(err){
  console.log(err,"fffffffff")
 }

}





  return (
    <div className='container '>    
        {info&&<ul className='card mt-sm-3 m-auto p-sm-3 list-group' style={{width:"550px"}}>
          <li className='list-group-item'>
            <div className='card-header'>
            <h1 className=' text-info text-center fs-3 card-titre border-bottom border-danger pb-2'>information about yourself </h1>
          <img src={info.link} className="rounded-3 card-img-top w-100" style={{padding:"5px"}}/>
            </div>
          
          <div className='card-body p-3 mb-2 bg-secondary  bg-opacity-75 border border-success '>
          <h2 className='card-title fw-bolder  fs-5 px-3 pt-3 font-monospace lh-sm'>name:{info.name}</h2>
            <p className='card-text fw-bolder fs-5 px-3 pt-3 font-monospace lh-sm'>email:{info.email}</p>
            <p className='card-text fw-bolder fs-5 px-3 pt-3 font-monospace lh-sm'>age:{info.age }</p>
          { info.matiere&& <div className='card-footer mt-4'>
            <h2 className='card-title text-primary text-center fs-5 border-bottom border-danger pb-2'>information about your education</h2>
             <p className='card-text fw-bolder fs-5 pt-3 font-monospace lh-sm'>name:{info.matiere.name}</p>
             <p className='card-text fw-bolder fs-5 pt-3 font-monospace lh-sm'>price:{info.matiere.price} D</p>
             <p className='card-text fw-bolder fs-5 pt-3 font-monospace lh-sm'>level:{info.matiere.level}</p>
             <p className='card-text fw-bolder fs-5 pt-3 font-monospace lh-sm'>started at: {info.matiere.dateInitial.substring(0,10)}</p>
             <p className='card-text fw-bolder fs-5 pt-3 font-monospace lh-sm'>number of hours: {info.matiere.numberHour}H</p>
            </div>}
          
          </div>
            
          </li>
        </ul>} 
       
    </div>
  );
}
