import React from 'react';
import '../../stylin/style.css'
import specialiste from'../../../../images/spealiste.jpeg'
import perfermance from'../../../../images/perfermance.jpeg'
import recruitement from '../../../../images/recuitment.jpeg'
import { Link } from 'react-router-dom';
export default function Services() {
  return (
    <div className='sectionHome bg bg-ligth border-top ' id='service'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center mb-3'>
            <h2 className='text-danger '>services</h2>
            <div className='underLine m-auto'></div>
          </div>
          <div className='col-md-4 mt-3' >
            
           
                <div className='card shadow' style={{height:"850px"}}>
                 <img src={perfermance} className="w-100 border-bottom" style={{height:"200px"}}/>
               
                 <div className='card-body' >
                 <h2 className='text-secondary fs-7 text-center '>Performance and Development for Teacher Class Employees</h2>
                 <div className='underLine m-auto'></div>
                 <p className=' text-capitalize fs-6 lh-base mt-4'>
                 support the center training in meeting its responsibilities to students, parents and to government through linking 
                 employee performance with achievement of school and government policies and targets

                 provide feedback on performance which will support ongoing learning and development of employees 
                 with a focus on ways in which student learning can be improved
                 </p>
                 </div>
                </div>

           
          </div>

          <div className='col-md-4 mt-3'>
            
           
                <div className='card shadow' style={{height:"850px"}}>

                 <img src={specialiste } className="w-100 border-bottom" style={{height:"200px"}}/>
              
                 <div className='card-body'>
                 <h2 className='text-secondary fs-7 text-center'> Learning specialists</h2>
                 <div className='underLine m-auto'></div>
                 <p className='text-capitalize fs-6 lh-base mt-4'>
                 Learning specialists will be highly skilled classroom practitioners who continue to spend the majority of their time in the classroom delivering high-quality teaching and learning and have a range of responsibilities related to their expertise, including teaching demonstration lessons, observing and providing feedback to other teachers and facilitating school-based professional learning.

                 Learning specialists are expected to have deep knowledge and expertise in high quality teaching and learning in delivering improved achievement, engagement and wellbeing for students. The role of the learning specialist will be to model excellence in teaching and learning through demonstration lessons, and mentoring and coaching teachers in improving the skill, knowledge and effectiveness of the teaching workforce.

                 The learning specialist role is aimed at building excellence in teaching and learning within the Teaching Service.
                 </p>
                 <link className='btn btn-link  nav-link bg bg-primaary active'></link>
                 </div>
                </div>

          </div>


          <div className='col-md-4 mt-3 '>
           
           
           
          
                <div className='card shadow'  style={{height:"850px"}}>
                
                
              
                  <img src={recruitement} className="w-100 border-bottom" style={{height:"200px"}}/>
                  <div className='card-body'>
                  <h2 className='text-secondary fs-7 text-center'>Recruitment in our center</h2>
                  <div className='underLine m-auto'></div>
                 <p className='text-capitalize fs-6 lh-base '>
                  The quality of the workforce is the major factor driving improvement in center. The Department supports a culture of leadership, learning and renewal in all workplaces with opportunities for career development and advancement. Excellent service provision can only happen when the right people are attracted, recruited, and supported to do their jobs as effectively as possible.

                  In this context schools are able to build progressively, or maintain, a staff team that can provide the best possible teaching and learning in the school. The Department is committed to the standard mode of employment in schools being ongoing. Schools have the capacity to select the best available employees to meet the educational needs of students and to maximise ongoing employment opportunities in Victorian government schools. Local selection arrangements provide the most effective way of matching
                   the talents and career aspirations of employees
                  with the specific needs of individual schools.
                 </p>
                 <Link to='recutement'className='btn btn-link nav-link bg bg-primaary active'>Recruitment area</Link>
                 </div>
                </div>
               
              </div>





        </div>
      </div>
    </div>
  );
}
