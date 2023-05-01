import React from 'react';
import '../../../stylin/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import { faPhone ,faLocation,faAt} from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <div className='sectionHome container-fuild bg bg-dark '>
      
      <div className='row'>
        <div className='col-md-4'>
         <h2 className="text- text-primary fs-3 text-capitalize text-center" >center information</h2>
          <p className='text-capitalize fs-6 lh-base text-white px-2 py-3'>
      
            our center is called magic iT Cyber Savvy whitch was made up in 23/02/2023
            and our Nature of business (SIC) is education that to provide the best quality of education for each spealiste with more 
            practice to get the main point that our student be succeful on it
         </p>
        </div>

        <div className='col-md-4'>
         <h2  className="text- text-primary fs-3 text-capitalize text-center" >quick links</h2>
         <div className='m-auto w-25 py-3'>
            <Link to="/" className='nav-link text-white'>home</Link>
            <Link to="about" className='nav-link text-white'>about us</Link>
            <Link   to="contact" className='nav-link text-white'>contact us</Link>
            <Link   to="/registration" className='nav-link text-white'>register</Link>
            
         </div>
        </div>

        <div className='col-md-4'>
         <h2 className='text-primary fs-3 text-capitalize text-center'>contact information</h2>
          <div className='d-flex justify-content-center py-3' >
          <FontAwesomeIcon icon={faPhone} className="text-white px-2 pt-1"></FontAwesomeIcon>
           
            <p className='text-white'>phone:</p>
            <p className='text-white' >58686889</p>
          </div>
          <div className='d-flex justify-content-center' >
          <FontAwesomeIcon icon={faLocation} className="text-white px-2 pt-1"></FontAwesomeIcon>
           
            <p className='text-white'>adresse:</p>
            <p className='text-white' >rue 1258 nabel hamza khlifi</p>
          </div>
          <div className='d-flex justify-content-center' >
          <FontAwesomeIcon icon={faAt} className="text-white px-2 pt-1"></FontAwesomeIcon>
           
            <p className='text-white'>email</p>
            <p className='text-white' >gmail@domaine.com</p>
          </div>
        </div>

      </div>

    </div>
  );
}
