import React from 'react';
import { useParams,Outlet,useLocation,useNavigate,History, Navigate } from 'react-router';
import { useState ,useEffect } from 'react';
import axios from'axios'
import '../../stylin/style.css'
import imgDefault from'./images/img.png'
import convertTo64Bit from './convertimg/convertFile64'
import myinfo from './display teatcher/displayTeacher'
export default function Edit() {


// update matiere
        const {id}=useParams()
        const location=useLocation()
  
        const navigate=useNavigate()
    // get location of value of forums
    const[namematiere,setNamematiere]=useState('');
    const[levelmatiere,setLevelmatiere]=useState('');
    const[pricematiere,setPricematiere]=useState();
    const[fileImage,setFileImage]=useState({file:''})
    const[dateInitial,setDateInitial]=useState('');
    const[nbrHour,setNbrHour]=useState()
    const[prof,setProf]=useState()
    const[load,setLoad]=useState(true)
  

    const handleUploadFile=async(e)=>{
      e.preventDefault()
     const file=e.target.files[0]
     const base64=await convertTo64Bit(file)
  
     setFileImage({...fileImage,file: base64})
    }
  
     useEffect(() => {
      setNamematiere(location.state.name)
      setLevelmatiere(location.state.level)
      setPricematiere(location.state.price)
      setFileImage({...fileImage,file:location.state.file})
      setDateInitial(location.state.dateInitial)
      setNbrHour(location.state.numberHour)
      setProf(location.state.prof)
   

     }, []);
   
//  display teacher
const[dataTeacher,setDataTeacher]=useState([])

useEffect(() => {
myinfo(setDataTeacher,setLoad)
},[]);
 console.log(fileImage.file)
        console.log( "stateeeeee",location.state)
 

      const handleChangePrice=(e)=>{
        setPricematiere(e.target.value) 
        e.preventDefault()
      }
      const handleChangeName=(e)=>{
        setNamematiere(e.target.value) 
        e.preventDefault()
      }
      const handleChangeLevel=(e)=>{
        setLevelmatiere(e.target.value) 
        e.preventDefault()
      }
      const handleChangeDate=(e)=>{
        e.preventDefault()
        setDateInitial(e.target.value)
      }
      const handleChangeHour=(e)=>{
        setNbrHour(e.target.value)
        e.preventDefault()
      }
        console.log("id",id)
    const updateMatiere=(e)=>{
      e.preventDefault()
        axios.put(`http://localhost:1000/updateMatiere${id}`,{
         
         name:namematiere,
         level:levelmatiere,
         price:pricematiere,
         file:fileImage.file,
         dateInitial:dateInitial,
         numberHour:nbrHour,
         prof:prof
        })
        .then((r)=>{
         console.log(r)
         navigate(-1)
       
        
        })
        .catch((err)=>{
         console.log(err)
        })
      }











  return (
    <div>
      <div className="container  ">
            <h2 className="text-success text-center m-4">up date matiere</h2>
        <div className="card p-4 bg bg-secondary" >

        
        <form className="row g-3 needs-validation " novalidate>
        <div className=''>
          <label  className="form-label col-md-4 m-auto" htmlFor="fileUpload"><img src={fileImage.file}className='labelImage'/></label>
         <input type="file" label='Image' name="myFile" className="form-control d-none" id="fileUpload" accept='.jpeg,.png,.jpg' onChange={(e)=>handleUploadFile(e)}/>
         <h3 className=' text-capitalise fs-5 mt-2 mr-4 text-warning'> click in the image to up date the file  for each education</h3>
  
      
          </div>
  <div className="col-md-4">
    <label for="validationCustom02" class="form-label text-white"> name of education</label>
    <input type="text" class="form-control" id="validationCustom02" value={namematiere} onChange={(e)=>handleChangeName(e)}/>
    <div className="invalid-feedback">
        Please choose a username.
      </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label text-white">level</label>
    <div class="input-group has-validation">

      <input type="text" class="form-control" id="validationCustomUsername"value={levelmatiere} aria-describedby="inputGroupPrepend"
       onChange={(e)=>handleChangeLevel(e)}/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
 
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label text-white">price</label>
    <div class="input-group has-validation">

<input type="number" class="form-control" id="validationCustomUsername"value={  pricematiere } aria-describedby="inputGroupPrepend" 
onChange={(e)=> handleChangePrice(e)}/>
<div class="invalid-feedback">
  Please choose a username valid.
</div>
</div>
  </div>

  <div className="col-md-4">
    <label for="validationCustom02" class="form-label text-white"> date Initial</label>
    <input type="date" class="form-control" id="validationCustom02" value={dateInitial} onChange={(e)=>handleChangeDate(e)}/>
   
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" class="form-label text-white"> number of hours</label>
    <input type="text" class="form-control" id="validationCustom02" value={nbrHour} onChange={(e)=>handleChangeHour(e)}/>
    
  </div>
  <div className='row mb-3 mt-3'>
            <div className="col-md-12 m-auto" style={{display:'flex'}}>
             
           <label class="form-label text-white w-25  mt-1 fs-4"> name of teacher</label>
   
            <select type='select' className='form-select w-50' onChange={(e)=>{
              e.preventDefault()
                setProf(e.target.value) 
            }}>
            <option >select the name of teachers</option>
              {
                dataTeacher.map((data)=>

                <option key={data._id} value={data._id} 
                selected={prof=== data._id? true : null}
                
                >{data.name}</option>
                )
              }
              
            </select>
        
   
            </div>

          </div>





 
  <div class="col-12">
    <div class="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
      <label className="form-check-label text-white" for="invalidCheck ">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary text-white" type="submit" onClick={(e)=>updateMatiere(e)}>up date</button>
  </div>
</form>
 </div>  
        </div>
        <Outlet />
    </div>
  )
}
