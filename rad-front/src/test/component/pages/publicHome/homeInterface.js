import React from 'react';
import Loginuser from './loginuser';
import Slide from './slide';
import '../../stylin/style.css'
import Vissionmissincours from './vissionmissincours';
import Services from './services';
import { Link } from 'react-router-dom';
import { useState ,useEffect} from "react";
import Search from "./search";
import axios from 'axios'

export default function HomeInterface() {
   

 //  display matiere from the data base with connection server 

 const [matiere,setMatiere]=useState([])
 const[searchMat,setSearchMat]=useState('')
 console.log(matiere,'rrrdfd')
const displayMatiereFromData=async()=>{
 try{
     const response= await axios.get(`http://localhost:1000/matiere?q=${searchMat}`)

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
  
   
    }, [searchMat])
  // search matiere
 
  const[load,setLoad]=useState('')


 
  

  return (
    <div>
     <Slide/> 
    
     <div className='sectionHome'>
      <div className='container'>
       <div className='row'>
        <div className='col-md-12 mb-3'>
          <h2 className='text-center text-danger title-style'>our training center</h2>
          <div className='underLine m-auto'></div>
          <p className='mt-3'>we are looking for giving the important information and all the necessary to make our student in the top level for any education they choice and we are ready to follow theim with our team member who they are an expert 
            with a lot of experiences to show our student how to start learning and make the education easier to understand and progress for having the basic knowlge for more information click in the button below
          </p>
          <Link to='/about'>Read more</Link>
        </div>
        
       </div>
      </div>

     </div>
     <form  className="container m-auto w-50 " role="search">
         <input  style={{border:'2px solid' }}className="form-control me-2" type="search" placeholder="Search your education or name of favovrite teacher" aria-label="Search"
         onChange={(e)=>{
          e.preventDefault()
          setSearchMat(e.target.value)
         }}
        />
     
        </form>
     <Search myData={(matiere)}/>
      
    
        <Vissionmissincours/>
        <Services/>

     < Loginuser/>
    </div>
  );
}
