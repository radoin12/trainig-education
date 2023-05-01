import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios'
import '../../stylin/style.css'
import { NavLink ,Outlet } from 'react-router-dom';
export default function CommentUser() {



  
//   affiche user  
const [users,setUsers]=useState([])
 
const displayuser=async()=>{
  try{
  const y= await fetch('http://localhost:1000/comment')
  const fetchdata=await y.json()
    setUsers(fetchdata)
   
}
catch(err){
console.log(err)
}


}


useEffect(() => {
displayuser()

}
, []);
console.log(users,'users')
  const [newcomment,setNewComment]=useState('')
  const[load,setLoad]=useState(true)

  // add comment
    const data={
        content:newcomment
    }
    const addComment=async()=>{
      try {
        const user=JSON.parse(localStorage.getItem('user'))
      if (user&&user.addToken) {
        const comment=await axios.post('http://localhost:1000/addComent',data,{
          headers:{
            Authorization: "Bearer "+user.addToken 
          }
        }) 
        setNewComment('')
        displayuser()
        profilo()
      } 
      } 
      
      catch (error) {
       console.log(error) 
      }
     

    }

  // delete comment
  const deleteComment=(id)=>{
  
    const user=JSON.parse(localStorage.getItem('user'))

    try {
      if (user&&user.addToken) {
        
        axios.delete(`http://localhost:1000/deletecomment/${id}`,{
          headers:{
            Authorization:'Bearer '+user.addToken
          }
        })
      
        .then((r)=>{
          console.log("dataaa",r)
          displayuser()
          profilo()  
         
        }
     
       
       
     )
   
 
      }
   
    

    } 
    catch (error) {
     console.log(error) 
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
    <div>
      
  <form className='form-group container w-50 mt-5 mb-5' >
  <div className='input-group'>
                       
         <input  value={newcomment} required type="text" className='form-control w-25' placeholder='add your comment'
         onChange={(e)=>{e.preventDefault()
            setNewComment(e.target.value)}} 
         ></input>
        <button className='btn btn-primary' type='submit' onClick={(e)=>{
          e.preventDefault()
          addComment()
          profilo()
          displayuser()
        }}
        
        >add your comment</button>
     </div>
  </form>

  <div className='container-fuild w-75 mt-2 text-white py-3 mb-5' style={{border:'2px solid'}}>
          <div className='row'>
           <div className='col-md-4'>
           <h3 className='text-center text-center fs-4 ' >story about your comment</h3>  
            {
          testComment&& testComment.comment.filter((data)=>data.content!=="").map((r,i)=>
        
          < >
        
          
          
         
       
         
          <div className='d-flex p-3'>
      
          <img src={testComment.link} style={{width:'100px',height:'60px',borderRadius:'100%',border:'2px solid white',margin:'0 10px'}}/> 
          <div className='p-2 mt-2' style={{border:'2px solid white',color:'white'}}>
          <h2 className='text-white fs-5'>{testComment.name}</h2>
           <p className='fs-5'> <span className='colorstyle2 px_2 fs-5'>comment {i+1}</span>:{r.content}</p> 
           <p>createdAt:{r.date.substring(0,10)}</p>
           <span>time:{parseInt(r.date.substring(11,13))+1}{r.date.substring(13,19)}</span>
          
          </div>
              
          </div>
          
            <button type='submit' className='btn btn-primary  mx-2' onClick={(e)=>{
              e.preventDefault()
              deleteComment(r._id)
         
          }
           
            }>delete</button>
           <NavLink to={`edit/${r._id}`} state={{
                content:r.content
           }}
          ><button className='btn btn-primary'>edit</button></NavLink> 
           </>
            )
          }
 
            </div>
   
            </div>
           
           </div>
  
         
         
       
           
            {
          users&& users.map((r,i)=>
          <div className='container-fuild w-75 mt-2 text-white py-3  mt-1' >
          <div className='row'>
           <div className='col-md-4'>
          <>
        
          
          
         
       
         
          <div className='d-flex p-3'>
              
          <img src={r.link} style={{width:'100px',height:'60px',borderRadius:'100%',border:'2px solid white',margin:'0 10px'}}/> 
          <div className='p-2 mt-2' style={{border:'2px solid white',color:'white'}}>
          <h2 className='text-white fs-5'>{r.name}</h2>
           <p className='fs-5'> <span className='colorstyle2 px_2 fs-5'>comment {i+1}</span>:{r._id.comment.content}</p> 
           <p>createdAt:{r._id.comment.date.substring(0,10)}</p>
           <span>time:{parseInt(r._id.comment.date.substring(11,13))+1}{r._id.comment.date.substring(13,19)}</span>
          
          </div>
              
          </div>
          
            
           </>
             </div>
   
             </div>
            
            </div>
          )
         }

        
         
        

     <Outlet/>
    </div>
  );
}
