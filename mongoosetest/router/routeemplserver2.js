const express=require('express')
const _=require('lodash')
const jwt=require('jsonwebtoken')
const{modelemployer,validateemployer,authemployer}=require('../modeluserServer/employershema')
const{validToken}=require('../model/modelUser')
const route=express.Router()


//************** */ add an employer***********

route.post('/addEmployer',validToken,async(req,res)=>{

    try{
        const{name,salary,position}=req.body
        
        const {err}=await validateemployer({name,salary,position})
      
        const regesterEmployer=await new modelemployer(_.pick(req.body,['name','salary','position']))
    
       
       
             
            regesterEmployer.save()
             const token= regesterEmployer.generateTok()
           
            res.header('authentification',token).send(regesterEmployer)
         
       
    }
    catch(err){
        res.send(err.details)
    }

  
})
// affiche employer
route.get('/displayemployer',async(req,res)=>{
    try{
   const employerDetails=await modelemployer.find({})
     res.send(employerDetails)
    }
    catch(err){
        res.status(500).json(err)
    }
})











module.exports=route