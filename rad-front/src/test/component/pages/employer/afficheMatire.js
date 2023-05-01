import axios from 'axios'
import { useState,useEffect,useReducer, Component } from "react"
import { useNavigate,Link, useLocation ,useParam,Outlet, NavLink} from 'react-router-dom'
import imgDefault from'./images/img.png'
import { $ } from'react-jquery-plugin'

import convertTo64Bit from './convertimg/convertFile64'
import myinfo from './display teatcher/displayTeacher'
import'../../stylin/style.css'


export default function Matiere(){


 
   const[load,setLoad]=useState(true)
   const [getsearch,setGetsearch]=useState('')
const location=useLocation()

// *****************ajout matiere********************
      const[name,setName]=useState('');
      const[level,setLevel]=useState('');
      const[price,setPrice]=useState();
      const[fileImage,setFileImage]=useState({file:''})
      const[dateInitial,setDateInitial]=useState('');
      const[nbrHour,setNbrHour]=useState()
      const[prof,setProf]=useState()
  
      const handleUploadFile=async(e)=>{
        e.preventDefault()
       const file=e.target.files[0]
       const base64=await convertTo64Bit(file)
    
       setFileImage({...fileImage,file: base64})
      }
      const handleChangePrice=(e)=>{
        e.preventDefault()
        setPrice(e.target.value) 
     
      }
      const handleChangeName=(e)=>{
        setName(e.target.value) 
        e.preventDefault()
      }
      const handleChangeLevel=(e)=>{
        setLevel(e.target.value) 
        e.preventDefault()
      }
      const handleChangeDate=(e)=>{
        e.preventDefault()
        setDateInitial(e.target.value) 
      }
      const handleChangeHours=(e)=>{
        e.preventDefault()
        setNbrHour(e.target.value)
      }
    
    const Elementmatiere={
    
      name:name,
      level:level,
      price:price,
      file:fileImage.file,
      dateInitial:dateInitial,
      numberHour:nbrHour,
      prof:prof
      
    }
   const ajoutMatiere=async(e)=>{
    e.preventDefault()
    try{
    const {data}=  await axios.post('http://localhost:1000/addMatiere',Elementmatiere)
    console.log(data)
    setLevel('')
    setPrice('')
    setName('')
    setDateInitial('')
    setFileImage({...fileImage,file:''})
   
    setNbrHour('')
    $("select").val('1')
    displayMatiereFromData()
   }
   catch(err){
      console.log(err,'ggggggggggg')
   }
           
   }





  //  *********************modifier le matiere************

 
 


    //  display matiere from the data base with connection server 
    const [matiere,setMatiere]=useState([])
   
   const displayMatiereFromData=async()=>{
    try{
        const response= await axios.get(`http://localhost:1000/matiere?q=${getsearch}`)
         setMatiere(response.data)
        
         setLoad(false)
    }
      
 catch(err){
    console.log(err)
    setLoad(false)
 }
   }

   useEffect(() => {
  
    displayMatiereFromData()
  
  
  

   }, [getsearch])
  
 



//   delete matiere


const navigate = useNavigate()

 useEffect(() => {
  if (location) {
   setGetsearch(location?.state.search) 
  }
 }, [location.state?.search]);

 console.log(getsearch,"getting serch")
const Deleted=(id)=>{
  try{
    
    axios.delete(`http://localhost:1000/deleteMatiere/${id}`)
    .then((r)=>{
      console.log(r)
      displayMatiereFromData()
    })
    .catch((err)=>console.log(err))
  
    
  
  }
  catch(err){
  console.log(err)
  }
  
}


//  display teacher
const[dataTeacher,setDataTeacher]=useState([])

useEffect(() => {
myinfo(setDataTeacher,setLoad)
},[]);


 
    return(
        <div>
           <div className="container  ">
            <h2 className="text-primary text-center m-4">add new matiere</h2>
        <div className="card p-4 bg bg-secondary" >

        
        <form className="card shadow bg bg-info " onSubmit={(e)=>ajoutMatiere(e)}>
          <div className='card-header'>
          <label  className="form-label col-md-4 m-auto" htmlFor="fileUpload"><img src={fileImage.file||imgDefault}className='labelImage'/></label>
         <input type="file" label='Image' name="myFile" className="form-control d-none" id="fileUpload" accept='.jpeg,.png,.jpg' onChange={(e)=>handleUploadFile(e)}/>
         <h3 className=' text-capitalise fs-5 mt-2 mr-4 text-danger'> click in the image to add the file  for each education</h3>
  
      
          </div>

          <div className='card-body '>
            <div className='row mb-3'  >
            <div className="col-md-12 m-auto" style={{display:'flex'}}>
             
            <label className="form-label text-white w-25  mt-1 fs-4"> name of education</label>
            <input type="text" class="form-control"  value={name} onChange={(e)=>handleChangeName(e)}/>
   
            </div>

          </div>

            <div className='row mb-3'>
            <div className="col-md-12 m-auto" style={{display:'flex'}}>
             
            <label class="form-label text-white w-25  mt-1 fs-4">level</label>
   

        <input type="text" className="form-control" value={level} aria-describedby="inputGroupPrepend"
         onChange={(e)=>handleChangeLevel(e)}/>
   
            </div>

          </div>
         


          <div className='row mb-3'>
            <div className="col-md-12 m-auto" style={{display:'flex'}}>
            
    

            <label  className="form-label text-white w-25  mt-1 fs-4">price</label>
   

          <input  class="form-control" value={price} aria-describedby="inputGroupPrepend" 
          onChange={(e)=> handleChangePrice(e)}/>
   
            </div>

          </div>

          <div className='row mb-3'>
            <div className="col-md-12 m-auto" style={{display:'flex'}}>
             
          <label class="form-label text-white w-25  mt-1 fs-4"> initial start of education</label>
   

        <input type="date" className="form-control" value={dateInitial} 
         onChange={(e)=>handleChangeDate(e)}/>
   
            </div>

          </div>


          <div className='row mb-3'>
            <div className="col-md-12 m-auto" style={{display:'flex'}}>
             
          <label class="form-label text-white w-25  mt-1 fs-4">number of hours</label>
   

        <input type="text" className="form-control" value={nbrHour} 
         onChange={(e)=>handleChangeHours(e)}/>
   
            </div>

          </div>
          <div className='row mb-3'>
            <div className="col-md-12 m-auto" style={{display:'flex'}}>
             
           <label class="form-label text-white w-25  mt-1 fs-4"> name of teacher</label>
   
            <select  id="options" type='select' className='form-select' onChange={(e)=>{
              e.preventDefault()
                setProf(e.target.value) 
               
            
            }}>
            <option value='1'>choose the teatcher of cours</option>
              {
                dataTeacher?.map((data)=>
                <option    key={data._id} value={data._id}>{data.name}</option>
                )
              }
              
            </select>
        
   
            </div>

          </div>

          <div className='row'>
          <div className="col-md-2 m-auto ">
          <button className="btn btn-primary text-white m-auto" type="submit" >add matiere</button>
         </div>
         
          </div>
        

          </div>
      
 
  
    
    
   
   
  
  

     
   
  


 
 

 
</form>
 </div>  
    </div>
      

        

    {matiere.length>0 && <div className="container-fuild">
<table className="table table-info  w-100 table-bordered border-primary table-responsive mt-4">
  <thead>

    <tr className="table-secondary mytab ">
      <th className='text-center text-success' > num </th>
      <th className='text-center text-success' >name of education</th>
      <th className='text-center text-success' >level</th>
      <th className='text-center text-success'  >price</th>
      <th className='text-center text-success' >image</th>
     
      <th className='text-center text-success' >date initial for education</th>
      <th className='text-center text-success' >number of hours</th>
      <th className='text-center text-success' >name of teacher</th>
     
      <th  className='text-center text-success '> number of experience for teacher </th>
      <th className='text-center text-success' >salary of teacher</th>
      <th className='text-center text-success' >delete</th>
      <th className='text-center text-success' >edit</th>
    </tr>
  </thead>
  {matiere.filter((data)=>data?.prof).map((r,i)=>
  <tbody>

   
    <tr>
    <th  className='text-center' scope="row">{i+1}</th>
    <td  className='text-center'>{r.name}</td>
    <td  className='text-center'>{r.level}</td>
    <td  className='text-center'>{r.price}</td>
    <td  className='text-center'><img src={r.file} style={{width:'100%',height:'60px'}}></img></td>
    <td  className='text-center'>{(r.dateInitial.substring(0,10))}</td>
    <td  className='text-center'>{r.numberHour}</td>
    {r.prof&&<>
      <td   className='text-center'>{r.prof.name}</td>
    <td   className='text-center'>{r.prof.experience}</td>
    <td  className='text-center'>{r.prof.salary}</td>
    </>
     
    }
   
    <td className='text-center'><button className="btn btn-primary "  onClick={(e)=>Deleted(r?._id)}>delete</button></td>
    
    {r.prof&&<td  className='text-center' ><NavLink to={`editMatiere/${r._id}`}state={
      {name:r.name,level:r.level,price:r.price,file:r.file,numberHour:r.numberHour,dateInitial:r.dateInitial.substring(0,10),prof:r.prof._id}
      }> <button className='btn btn-primary '>edit</button></NavLink></td>}
    
  </tr>
  
    
      
     </tbody>
       )}
    </table>

</div>}
{matiere.length===0 &&<p className='mt-4 text-center text-danger'>you should click to the button add matiere to create them and they will be displayed</p>}  
  <Outlet/>
</div>

    )
}