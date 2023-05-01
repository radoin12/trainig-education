const mongoose=require('mongoose')

const schemaTeacher= new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minLength:4,
        maxLength:15
    },
    experience:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true   
    },
    image:{
        type:String,
        required:true
    }
   
})

const teacher=mongoose.model('Teacher',schemaTeacher)
module.exports=teacher