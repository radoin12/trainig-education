const mongoose=require('mongoose')


const  valdateobid=(req,res,next)=>{
  const objectid=mongoose.Types.ObjectId
  if (!objectid.isValid(req.body.matiere)) {
    return res.status(400).send('invalid id')
}
next()
}


const validateIdteacher=(req,res,next)=>{
  const objtId=mongoose.Types.ObjectId
  if (!objtId.isValid(req.body.prof)) {
    return res.status(400).json('you should select your choice ... ')
  }
  next()
}

const {modelUser}=require('../model/modelUser')


const validateUserRegister= async(req,res,next)=>{

   
  try{
    const user=await modelUser.findOne({email:req.body.email})
    if (user) {
        throw new Error()
       
      }
  
   
 
    next()
 
  }
  catch(err){
    res.status(402).send('email exist')
  }
  
  
 

}
module.exports={validateUserRegister,valdateobid,validateIdteacher}