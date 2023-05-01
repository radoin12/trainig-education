const mongoose=require('mongoose')
const joi=require('joi')
const jwt=require('jsonwebtoken')

const shemaemployer=new mongoose.Schema({
    name:{},
    salary:{},
    position:{}

})

shemaemployer.methods.generateTok=function() {
    const  token=jwt.sign({_id:this._id},"private")
    return token
  }

function validateemployer(employer) {
    const schema=joi.object({
        name:joi.string().required(),
        salary:joi.number().required(),
        position:joi.string().required()
        
    })  
   return schema.validateAsync(employer)

}
// access token
function authemployer(req,res,next) {
   let token= req.header("authentification")
   if (!token) {
    res.status(401).send('access rejected...')
   }
   try {
    const decode=jwt.verify(token,'private')
    req.user=decode
       next()
   } 
   catch (error) {
     res.send(error)
   }
}



const modelemployer=mongoose.model('employer',shemaemployer)
module.exports={modelemployer,validateemployer,authemployer}