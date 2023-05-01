import React from 'react';
import MainPublic from './mainPublic';
import { Routes , Route } from 'react-router';
import Register from './registre';
import HomeInterface from './homeInterface';
import Contact from './contact';
import About from './about';
import Loginuser from './loginuser';
function HomeVisible() {
  return (
    

    <Routes>
        <Route  element={<MainPublic/>}>
             <Route index element={< HomeInterface/>}/>
             <Route path="/registration" element={<Register/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path='about'  element={<About/>}/>
             <Route path='login' element={<Loginuser/>} />
     

        </Route>
      
    </Routes>
  )
}

export default HomeVisible;
