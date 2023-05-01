
const jwt=require('jsonwebtoken')
const {modelUser}=require('../model/modelUser')

require('dotenv').config()



 const authorisation=async(req,res,next)=>{

  

   
    
   
  
    let token=req.header('Authorization')
      
       
          if (token) {
            let auth=token.split(' ')[1]
            jwt.verify(auth,process.env.privateKey,(err,user)=>{
              if (err) {
                return res.status(401).json('invalid token')
              }
              req.user=user
              next()
            })
          }
          else{
            return res.status(403).json('not regestered yet')
          }
        
      
      
      
       
      
        
   
    
  }
module.exports=authorisation
