
import Matiere from "./afficheMatire"
import { Routes,Route} from "react-router"   
import Teacher from "./teacher"
import Edit from "./editmatiere"
import Home from "./home"
import Layout from "./Layout"
import DisplayUser from "./displayUser"
import EditTeacher from "./editTeacher"
export default function HomeEmployer() {

    


    return(

    <div>
     <Routes>
      <Route  element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="addMatiere"  element={<Matiere/>} />
      
      <Route path="teacher" element={<Teacher/>}/>
     
     

      <Route path='teacher/edit/:id' element={<EditTeacher/>}/>
      <Route  path="addMatiere/editMatiere/:id" element={<Edit/>} />
      <Route path="displayUser" element={<DisplayUser/>}/>

      </Route>
     
    

    </Routes>

    </div>

    )
}