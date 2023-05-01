

import HomeUser from './test/component/pages/user/homeUser'
import HomeEmployer from './test/component/pages/employer/homeEmpl'
import Protect from './test/component/pages/user/protected'
import NoPage from "./test/component/nopages"
import{BrowserRouter,Route,Routes,useParams} from   'react-router-dom'

import HomeVisible from './test/component/pages/publicHome/homeVisible'

function App() {
   
  return (
    <div >
    
    <BrowserRouter>
      <Routes>




        <Route path='/*' element={<HomeVisible/>} />
        <Route path="/homeuser/*" element={
       <Protect>
         <HomeUser/>
       </Protect>
        
       
        
        }/>
        <Route path='/admin/*' element={<HomeEmployer/>}/>
         <Route path="*" element={<NoPage/>} />

         
        






     
        
      </Routes>
     
    </BrowserRouter>
    
  
      
    </div>
  );
}

export default App;
