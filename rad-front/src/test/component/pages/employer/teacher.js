import React from 'react';
import imgDefault from'./images/teach.png'
import { useState,useEffect } from 'react';
import convertTo64Bit from'./convertimg/convertFile64'
import  myinfo from './display teatcher/displayTeacher'
import '../../stylin/style.css'
import { NavLink,Outlet } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';



export default function Teacher() {
  
  const[infoTeacher,setInfoTeacher] = useState({
    name:'',
    experience:'',
    salary:'',
    image:''
  });
  const handleUploadFile=async(e)=>{
    e.preventDefault()
    const base64=await convertTo64Bit(e.target.files[0])
    setInfoTeacher({...infoTeacher,image:base64})
    
  }

//    add New teatcher
  const data={
    name:infoTeacher.name,
    experience:infoTeacher.experience,
    salary:infoTeacher.salary,
    image:infoTeacher.image
  }

  const handleSubmitTeacher=(e)=>{

    e.preventDefault()
   
  fetch('http://localhost:1000/addTeacher',{
    method:'post',
    headers:{
        "content-type":'application/json',
       
    },
    body:JSON.stringify(data)
  })
  .then((res)=>res.json())
  .then((y)=>{
      console.log(y.message)
      if (y.message) {
        toast.error('teacher validation failed') 
      
      }
      else{
        toast.success('teacher has been created')  
      }
         
    
     
    
    
  
      myinfo(setInfo,setLoad)
    setInfoTeacher({...infoTeacher,name:'',image:'',experience:'',salary:''})
  })
  .catch((err)=>{
    if (err) {
        console.log("errrrr",err)
       
    }
   
    console.log("errrr",err)
  })

    
  }

//    display teachers
    const[info,setInfo]=useState([])
    const[load,setLoad]=useState(true)
    useEffect(() => {
    myinfo(setInfo,setLoad)
    }, []);
  
  
//    delete teacher
   const deleteTeacher=(id1)=>{
    fetch(`http://localhost:1000/deleteTeacher/${id1}`,{
        method:'DELETE'
      
    })
   
    
    .then((res)=>{
        if (!res.ok) {
            console.log('error')
            return;
        }
       
      
        return res.json()
       
       
    })
    .then((data)=>{
      
        myinfo(setInfo,setLoad)
        toast.success(data)
       
        console.log(data)
       
           
           
           
    })
    .catch((error)=>{
        console.log(error)
    })
   }

  return (
    <div>
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
       <div className="container mb-3 " style={{width:'1000px'}}>
            <h2 className="text-primary text-center m-4">add new Teacher</h2>
        <div className="card p-4 bg bg-secondary" >

        
        <form className="card shadow bg bg-info "onSubmit={handleSubmitTeacher} >
          <div className='card-header'>
          <label  className="form-label col-md-4 m-auto" htmlFor="fileUpload"><img src={infoTeacher.image ||imgDefault}className='labelImage'/></label>
         <input type="file" label='Image' name="myFile" className="form-control d-none" id="fileUpload" accept='.jpeg,.png,.jpg' onChange={(e)=>handleUploadFile(e)}/>
         <h3 className=' text-capitalise fs-5 mt-2 mr-4 text-danger'> click in the image to add a new picture of the teacher</h3>
  
      
          </div>

          <div className='card-body '>
            <div className='row mb-3'  >
            <div className="col-md-12 m-auto" style={{display:'flex'}}>
             
            <label className="form-label text-white w-100  mt-1 fs-5"> name of teacher</label>
            <input type="text" class="form-control"value={infoTeacher.name}  onChange={(e)=>
              { 
                e.preventDefault()
                 setInfoTeacher({...infoTeacher,name:e.target.value})
                 
              }}  />
   
            </div>

          </div>

         
         


          <div className='row mb-3'>
            <div className="col-md-12 m-auto" style={{display:'flex'}}>
            
    

            <label  className="form-label text-white w-100  mt-1 fs-5">number of experience</label>
   

          <input  class="form-control" value={infoTeacher.experience} onChange={(e)=>
              { 
                e.preventDefault()
                 setInfoTeacher({...infoTeacher,experience:e.target.value})
                 
              }} 
        />
   
            </div>

          </div>

          <div className='row mb-3'>
            <div className="col-md-12 m-auto" style={{display:'flex'}}>
             
           <label class="form-label text-white w-100  mt-1 fs-5"> salary of the teacher</label>
   

           <input  className="form-control" value={infoTeacher.salary} onChange={(e)=>
              { 
                e.preventDefault()
                 setInfoTeacher({...infoTeacher,salary:e.target.value})
                 
              }}  />
   
            </div>

          </div>


       
        

          <div className='row'>
          <div className="col-md-4 m-auto ">
          <button className="btn btn-primary text-white m-auto w-100" type="submit" >add new teacher</button>
         </div>
          </div>


         
        

          </div>
      
 
  
    
    
   
   
  
  

     
   
  


 
 

 
</form>
 </div>  
        </div>


      
          <div className='container mt-2 mb-2'>
          
          

           
                    
                    <div className='card shadow w' style={{backgroundColor:'  rgb(220, 253, 120)',width:'100%'}}>
                     <div className='row '>
                   
                  {   
                 info&& info.map((data)=>
                  <div className='col-sm-4 '>
                       
                       <div className='card-body borderTitle'>
                       <img src={data.image} style={{width:'150px',height:'150px' ,border:'2px solid white',borderRadius:'100%'}} />
                        <h2 className='fs-6 text-danger text-center w-100 'style={{borderBottom:'1px solid blue',height:'20px'}}>information about {data.name}</h2>
                          
                         <p className=' fs-5 px-2'>name:{data.name}</p>
                         <p className=' fs-5 px-2'>number of experience  {data.experience}</p>
                         <p className=' fs-5 px-2'>salary:  {data.salary}</p>
                          <button className='btn btn-primary w-50 mt-2' onClick={()=>deleteTeacher(data._id)}>delete</button>
                         <NavLink to={`edit/${data._id}`}state={
                    {name:data.name,salary:data.salary,exp:data.experience,image:data.image}
      }> <button className='btn btn-primary w-50 mt-2  ' >edit</button></NavLink>
                        
                       </div>
                    </div>)
                    }
                    {
                        !info.length&&<p className='text-center text-danger py-3 fs-3'>there is no teacher has been  regestered in your application</p>
                    }
                  
                  
                  
                  
                    
           
                    
                  </div>
         
            </div>
            </div>
             
         
           
            <Outlet/>
    </div>
  );
}
