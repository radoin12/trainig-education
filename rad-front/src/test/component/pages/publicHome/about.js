import React from 'react';
import '../../stylin/style.css'
import { Link } from 'react-router-dom';
import Vissionmissincours from './vissionmissincours';
export default function About() {
  return (
    <div>
         <div className='container-fuild bg bg-primary'>
         <div className='row'>
            <div className='col-sm-12 py-4'>
                <h5 className='lightBlue text-center fs-2 text-capitalize '>about us</h5>
                <div className='underLine4   m-auto'></div>
            </div> 
         </div>
        </div>
        <div className='sectionHome border-bottom'>
      <div className='container'>
       <div className='row'>
        <div className='col-md-12 mb-3'>
          <h2 className='text-center text-danger title-style'>our training center</h2>
          <div className='underLine m-auto'></div>
          <p className='mt-3'>we are looking for giving the important information and all the necessary to make our student in the top level for any education they choice and we are ready to follow theim with our team member who they are an expert 
            with a lot of experiences to show our student how to start learning and make the education easier to understand and progress for having the basic knowlge for more information click in the button below
          </p>
         
        </div>
        
       </div>
      </div>

     </div>
     <Vissionmissincours/>
    </div>
  );
}
