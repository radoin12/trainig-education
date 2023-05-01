// import axios from "axios";

// import jwtDecode from "jwt-decode";
// import AuthService from "./auth.service";

//  const instance= axios.create({
//      baseURL:'http://localhost:1000',
//       headers:{
//          'Content-Type':'application/json'
//       }
//  })

//  const RefreshToken=async()=>{
//     try{
     
//        const rs=await axios.post('http://localhost:1000/refresh',{
   
//                    token:AuthService.getCurrentUser().refreshToken
//                 });

                       
//                       if (rs.data.refreshToken) {
//                         AuthService.upDateNewAccessTokenAndRefreshToken(rs.data.refreshToken)
                       
//                       }   
            
                
//                  return rs.data
                   
                       
//     }
   
//          catch(err){
//         console.log("errrr",err)
//     }
//    }
 


//  instance.interceptors.request.use(
//     async(config)=>{

//         let currentDay=new Date();
       
//  const token= AuthService.getCurrentUser().addToken


//   const decodeToken=jwtDecode(token)

//    if (decodeToken.exp<currentDay.getTime()) {
//       console.log(AuthService.getCurrentUser(),"msg")
//       const m=await RefreshToken()
     
//     config.headers["Authorization"]="Bearer "+m.accessToken
//    }
//    return config;
//     },
//     (error)=>{
//     return Promise.reject(error)
//     }
//  )








// export default instance
