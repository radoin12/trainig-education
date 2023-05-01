const express=require('express')

const  {modelEtudient,validateuser,euthorisationStudent}=require('../modeluserServer/modelClientcompte')
const app=express()
const _=require('lodash')
const router=express.Router()
const bcrypt=require('bcrypt')
const token=require('jsonwebtoken')






async function midlware(req,res,next) {
  
        const y=await modelEtudient.findOne({email:req.body.email})
        if (y) {
          res.json('email  exist')
      
        
        }
        else{
            
            next() 
           
        }
     
    
 
        
      }



// register user

router.post('/add',midlware, async(req,res)=>{
        
        try{
           
          
          
             
          
          
          

           
            const{name,password,confirmPassword,email,region}=req.body
            const {error}= await validateuser({name,password,confirmPassword,email,region})
           
                 const cyptpassword=await bcrypt.hash(req.body.password,10)
                 req.body.password=cyptpassword
                 req.body.confirmPassword=cyptpassword
               const da= await modelEtudient.create(_.pick(req.body,['name','email','confirmPassword','password','region','option']))
               const token=da.generateTokens()
           
                res.header('auth',token).send(da)
            
         
           
        }
        
        catch(err){
            res.send(err.details.map(r=>r.message))
        }
      })


    //   login user
     router.post('/login',euthorisationStudent,(req,res,next)=>{
       modelEtudient.findOne({email:req.body.email})
       .then((dis)=>{
        
        if ( !dis ) {
         
          res.send('failed email or password')
              
        }
   
        else{
            const comparre=bcrypt.compare(req.body.password,dis.password) 
            .then((validpassword)=>{
                if (validpassword) {
                    const token=dis.generateTokens()
                 res.header(token,'auth').send(dis)   
                }
                else{
                    res.send('failed password or email')
                }
            })
           
        }
            
           
               
        
       
       })
       .catch((err)=>{
        res.json(err)
        console.log(err)
       })
     })
        






module.exports=router