import React from 'react';
import'../../stylin/style.css'
export default function Search({myData}) {
  
  return (
    <div style={{marginTop:'10px'}}>
      
       
     <div className='conatiner border-bottom'>
        <h2 className='text-center text-danger mt-3'> our education</h2>
        <div className='underLine4 m-auto mb-3'></div>
        <div className='row'>
        { myData&& myData.filter((data)=>data.prof!=null).map((data)=>
        
        <div className='col-md-4 p-3' style={{height:'100%'}}>
             <img src={data.file} style={{width:'100%',height:'200px'}}/>
            
           <li className='card shadow p-2' style={{listStyle:'none'}}>
            <h2 className='carb-header text-center fs-5 text-info'>information about {data.name}</h2>
            <div className='underLine4 m-auto'></div>
            <div className='card-body'>
            <div className='d-flex'>
            <p className='px-2 '>name:</p><span>{data.name}</span>
            </div>
            <div className='d-flex'>
            <p className='px-2 '>level:</p><span>{data.level}</span>
             </div>
             <div className='d-flex'>
            <p className='px-2 '>price:</p><span>{data.price}D</span>
             </div>
             <div className='d-flex'>
             <p className='px-2 '>started at</p> <span>{data.dateInitial.substring(0,10)}</span>   
             </div>
      

           </div>
           
          
        </li>
 
       
       <img src={data.prof.image} style={{width:'100%',height:'200px'}}/>
            
            <li className='card shadow p-2' style={{listStyle:'none'}}>
             <h2 className='carb-header text-center fs-5 text-info'>information about teacher of {data.name}</h2>
             <div className='underLine4 m-auto'></div>
             <div className='card-body'>
             <div className='d-flex'>
             <p className='px-2 '>name:</p><span>{data.prof.name}</span>
             </div>
             <div className='d-flex'>
             <p className='px-2 '>experience:</p><span>{data.prof.experience}</span>
              </div>
           
       
 
            </div>
            
           
         </li>
       
       
       
     

       </div>
        
        )
     
     
         }
        </div>
    </div>  
    </div>
  );
}
