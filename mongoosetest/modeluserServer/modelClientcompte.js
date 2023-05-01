const mongoose=require('mongoose')
const validator=require('validator')
const Joi=require('joi')
const complexsitypassword=require('joi-password-complexity')
const jwt=require('jsonwebtoken')
const { string } = require('joi')
const shemaEtudient=new mongoose.Schema({
  name:String,
  password:{
   type: String,
   required:true
  },
  confirmPassword:{
   type:String,
   required:true 

  },

 email:{},
 region:String,
 option:Boolean
})


function validateuser(user) {
  const schema=Joi.object({
    name:Joi.string().required().alphanum(),
    password:new complexsitypassword({
      min: 8,
      max: 25,
      lowerCase: 1,
      upperCase: 1,
      numeric: 1,
      symbol: 1,
      requirementCount: 4
    }),
    confirmPassword:Joi.ref('password'),
     
    email:Joi.string().min(8).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    region:Joi.string().required()
  
  })
  return schema.validateAsync(user)
}

//  to add token for every employer
shemaEtudient.methods.generateTokens=function() {
  const  token=jwt.sign({_id:this._id},"privatekey")
  return token
}


// auth user
function euthorisationStudent(req,res,next) {
  
  let token=req.header("auth")
  if (!token) {
    res.status(401).send("access rejected...")
  }
  try {
    const decode=jwt.verify(token,"privatekey")
    next()
  } 
  catch (error) {
    res.send(error)
  }

}




const modelEtudient=mongoose.model('Etudient',shemaEtudient)

 



   module.exports={modelEtudient,validateuser,euthorisationStudent}
  
