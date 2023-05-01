const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const validator=require('validator')
const joi=require('joi')
const complexPassword=require('joi-password-complexity')
const { schema } = require('./modelArticle')
const { boolean, required, string } = require('joi')
require("dotenv").config()
const matiereShema=new mongoose.Schema({
    file:{
      type:String,
      required:true,
    },
    name:{
        type:String,
        required:true,
    },

    level:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        max:3500
    },
    dateInitial:{
      type:Date,
      required:true
    },
    numberHour:{
      type:Number,
      required:true
    },
    prof:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Teacher',
      required:true
    }
  

  })


const schemaComent= new mongoose.Schema({
  content:{
    type:String,
    required:true,
    maxLength:200
  },
  date:{
    type: Date,
    default:()=>Date.now()
  }
})

const ShemaClient= new mongoose.Schema({
    name:{
        type:String,
      
       
        
       
       
    },
    password:{
        type:String,
        required:[true,"password is required"],
        trim:true,
        
     
    },
    confirmPassword:{},
    email:{
        type:String,
      
        trim:true,
        index:true
      
        
     

    },
    link:{
        type:String,
        required:[true,"link is required"]
    },
   
    createdAt:{
       type: Date,
       default:()=>Date.now()
    },
    age:{
        type:Number,
        required:[true,"age is required"]
        // validate:{
        //     validator:v=>v>18,
        //     msg:e=>`${e.value} should be more than 18`
        // }
    },
   
   matiere:{
   
      
        type:mongoose.Schema.Types.ObjectId,
        ref:"matiereClien"
      
     
      
        
       
     
      
       
      },
      comment:[schemaComent],
      
         
        
      
    
  
    
   
 
  isAdmin:{
    type:Boolean
  }
  

  })
// ****************validation user************
 function validateuser(user) {
   const schema=joi.object({
    name:joi.string().min(3).required(),
    password:new complexPassword({
        min: 8,
        max: 25,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 1,
        requirementCount: 4
      }),
      confirmPassword:joi.ref('password'),
      email:joi.string().min(8).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','fr'] } }),
      link:joi.string().uri().required(),
      age:joi.number().required()
     

   }) 
     return schema.validateAsync(user)


  }
  function validateuserUpdate(user) {
    const schema=joi.object({
     name:joi.string().min(3).required(),
     password:new complexPassword({
         min: 8,
         max: 25,
         lowerCase: 1,
         upperCase: 1,
         numeric: 1,
         symbol: 1,
         requirementCount: 4
       }),
       confirmPassword:joi.ref('password'),

       link:joi.string().uri().required(),
       age:joi.number().required(),
      
      
 
    }) 
      return schema.validateAsync(user)
 
 
   }


     ShemaClient.methods.authandSaveToken=async function() {
        try{
            let token=  jwt.sign({_id:this._id,name:this.name,link:this.link,isAdmin:this.isAdmin},process.env.privateKey,{expiresIn:'20d'})
         
             this.save()
            return token
        }
        catch(err){
            res.send(err)
        }
      
     }

   ShemaClient.methods.generateRefreshToken=async function(){

    try{
     let token= jwt.sign({_id:this._id,link:this.link,name:this.name,isAdmin:this.isAdmin},process.env.refreshToken)
   
     return token
    }
    catch(err){
     res.send(err)
    }
   }



        // ****************create a json web token *********

        // ShemaClient.methods.takeToken=function() {
        //     const token=jwt.sign({_id:this._id},"securte")
        //     return token
        // }



        // verify the signature of valid token from user

        //  function validToken(req,res,next) {
        //     const token=req.header("auth_login")
        //     if (!token) {
        //       return res.send('access rejected')  
        //     }
        //     try{
        //         const decode=jwt.verify(token,"securte")
        //          req.user=decode
        //         next()
        //     }
        //     catch(err){
        //         res.send(err)
        //     }
            
        //  }














   const modelUser=mongoose.model('Client',ShemaClient)
const matiereClient=mongoose.model('matiereClien',matiereShema)
    


       
   

  
   
  

module.exports={modelUser,matiereClient,validateuser,validateuserUpdate}