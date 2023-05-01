
import { Navigate } from "react-router"
import AuthService from "../service/auth.service"

export default function Protect({children}) {
    
  
    if (!AuthService.getCurrentUser()) {
       return  <Navigate to="/" replace></Navigate>
    }

    return children




}