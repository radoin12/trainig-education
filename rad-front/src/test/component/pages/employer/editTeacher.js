import React from 'react';
import { useState,useEffect } from 'react';
import convertTo64Bit from'./convertimg/convertFile64'
import { useLocation, useNavigate, useParams } from 'react-router';
import '../../stylin/style.css'
import { toast,ToastContainer } from 'react-toastify';

export default function EditTeacher() {
    const[infoTeacher,setInfoTeacher] = useState({
        name:'',
        experience:'',
        salary:'',
        image:''
      });

const handleUploadFile=async(e)=>{
    const file=e.target.files[0]
    const imgConverted=await convertTo64Bit(file)
  
    setInfoTeacher({...infoTeacher,image:imgConverted})


}
const data={
    name:infoTeacher.name,
    experience:infoTeacher.experience,
    salary:infoTeacher.salary,
    image:infoTeacher.image
}
const {id}= useParams()
const location=useLocation()
const navigate=useNavigate()
useEffect(() => {
if (location) {
  setInfoTeacher({...infoTeacher,
    name:location.state.name,
    experience:location.state.exp,
    image:location.state.image,
    salary:location.state.salary

})  
}
}, []);

console.log("id",id)
const updateteacher=async(e)=>{
    try {
        e.preventDefault()
        const editTeacher=await fetch(`http://localhost:1000/updateTeacher/${id}`,{
            method:'put',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)    
    } )
   console.log(editTeacher.json()) 
   setTimeout(() => {
    navigate(-1)
   }, 1000);
   
   toast.success('teacher has been changed')
}
    catch(error) {
       console.log(error) 
       toast.error('failed to change info about teacher check your validation')
    }

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
            <h2 className="text-primary text-center m-4">up date Teacher</h2>
        <div className="card p-2 bg bg-secondary" >

        
        <form className="card shadow bg bg-success" >
          <div className='card-header'>
          <label  className="form-label col-md-4 m-auto" htmlFor="fileUpload"><img src={infoTeacher.image} className='labelImage'/></label>
         <input type="file" label='Image' name="myFile" className="form-control d-none" id="fileUpload" accept='.jpeg,.png,.jpg' onChange={(e)=>handleUploadFile(e)}/>
         <h3 className=' text-capitalise fs-5 mt-2 mr-4 text-info'> click in the image to change the photo of the teacher</h3>
  
      
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
          <button className="btn btn-primary text-white m-auto w-100" type="submit" onClick={(e)=>updateteacher(e)}>up date teacher</button>
         </div>
          </div>
          </div>
 
   </form>
  </div>  
 </div>
</div>
  );
}
