import React from 'react';
import { useState ,useEffect} from 'react'; 
import { Outlet } from 'react-router';
export default function DisplayUser() {

//   affiche user  
  const [user,setUser]=useState([])
   const[searchUser,setSearchUser]=useState('')
    const displayuser=async()=>{
      try{
      const y= await fetch(`http://localhost:1000/affiche?user=${searchUser}`)
      const fetchdata=await y.json()
        setUser(fetchdata)
        console.log(fetchdata)
  }
  catch(err){
    console.log(err)
  }


  }
  useEffect(() => {
    displayuser()

    }
  , [searchUser]);

  return (
    <div className='container mt-5'>
           <form  className='w-75 m-auto mb-4' >
            <div className='row '>
            <input className={searchUser&&'form-control col-md-4 w-50 m-auto'} placeholder='searching the students'
               style={!searchUser?{ border:'2px solid blue',width:'500px',margin:'0 auto',padding:'8px',borderRadius:'10px'}:{ border:'0px solid '}}
            onChange={(e)=>{
              e.preventDefault()
              setSearchUser(e.target.value)
            }}
            />
            </div>
     
             </form>
        <div className='row border-primary  '>
             
             <h2 className='text-center text-danger card-title'>number of users is {user.length}</h2>
           
         {
            user.map((r,i)=>
                <div className="card m-4 border-success  bg-primary col-md-5">
              
              <h2 className='fs-3 text-center text-danger card-title'>user {i+1} </h2>
             <div className="card-body  " >
             
              <ul className='card border-warning mb-3 bg-info position-relative  ' style={{ height:"300px"}}>
              <img src={r.link} className="card-img-top img-fluid  rounded-circle position-absolute top-0 end-0 translate-middle-y  " alt="info" style={{width:"100px"}} />
                  <li className='d-flex   justify-content-start mt-3  '>
               
                    <h1 className='badge  fs-6   text-secondary ' >name:</h1> <p className=' fs-6   badge'>{r.name}</p>
                    </li>
                  <li className='d-flex  justify-content-start'><h1  className=' badge fs-6   text-secondary '>email:</h1> <p className=' badge  fs-6 '>{r.email}</p></li>
                  <li className='d-flex  justify-content-start '><h1 className=' fs-6  badge text-secondary '>age:</h1> <p className=' fs-5   badge'>{r.age}</p></li>
                 {  r.matiere&&  <>
                       <li className='d-flex  justify-content-start '><h1 className='  fs-6 badge text-secondary '>name of education: </h1> <p className='   badge fs-6 card-text '>{r.matiere.name}</p></li>
                       <li className='d-flex justify-content-start  '><h1 className='  fs-6  badge  text-secondary '>price:</h1> <p className='  badge fs-6 card-text'>{r.matiere.price}</p></li> 
                       <li className='d-flex  justify-content-start'><h1 className='fs-6    badge text-secondary  '>level :</h1> <p className=' badge fs-6 card-text '>{r.matiere.level}</p></li>
                
                
                </>}
                      
                       <li className='d-flex  justify-content-start'><span>created in:</span> <p className=' badge fs-6 card-text '>{r.createdAt}</p></li>
                  
                  
                 
                  
                  
              </ul>
            </div>
          </div>
            )
         }
  



        </div>
   <Outlet/>
    </div>
    
  )
}
