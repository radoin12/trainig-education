
import { Routes,Route } from "react-router";
import axios from "axios";
  import jwt from "jwt-decode";
import { useEffect ,useState} from "react";



import React from 'react';
import Main from "./main";
import HomeStudent from "./homeStudent";
import EditComment from "./editComment";
import Serv from "./serv";
export default function HomeUser() {

  return (
    <div>
      
   <Routes>
        <Route element={<Main/>}>
         <Route index element={<HomeStudent/>}/>
         <Route path="edit/:id" element={<EditComment/>}/>
         
        
           <Route path="profile" element={<Serv/>}/>
 
        
        </Route>
    

    </Routes>
    </div>
  
  
  );
}
