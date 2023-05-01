

const mongoose=require('mongoose')
const validator=require('validator')



const comentaire=new mongoose.Schema({
    name:{
      type:String,
      required:true,
      max:10,
      trim:true,

    },
    message:{
       type:String,
       required:true
    }

})

const  shemaArticle=new mongoose.Schema({
 name:{
    type:String,
    required:[true,"name is required"],
   //  maxlength:8,
   //  minlengt:2
 },
 price:{
    type:Number,
    required:[true,"price is required"],
   //  max:500,
   //  min:250
   validate(value){
     if ((value>12000 || value<500)) {
        throw  new Error('have to be between 500 and 1000')
     }
   }
 },
 description:{
    type:String,
    required:[true,"description is required"],
   validate(v){
if((v.lenght>100)||(v.lenght<50)){
   throw new Error('have to be between 50 and 100')
}
   }
 },
 comnt:[comentaire],

 categorie:{
    type:String,
    required:[true,"categorie is required"],
   //  validate:{
   //    validator:d=>d.lenght>5 ,
   //    msg:r=>`${r}more five letters`
   //  }
         // **********method length**********
   //   validate(v){
   //      if (!validator.isLength(v,{max:5,min:2})) {
   //        throw new Error('errrrrrr') 
   //      }
   //   }
        // ***************password strong*********************


   // validate(v){
   //    if (!validator.isStrongPassword(v)) {
   //      throw new Error("password have to contain upper case number lower case and symbole") 
   //    }
   // }
   //  remove  espace trim:true,
   // **************** method email*****************
   //   validate(v){
   //     if (!validator.isEmail(v)) {
   //        throw new Error('email not valid')
   //     }
   //   }
      //   check if  url  present in internet      
   validate(v){
    if (!validator.isURL(v)) {
      throw new Error ('url not exist')
    }
   }
    






 }

})
    
const  ModelArticle=mongoose.model('Article',shemaArticle)

module.exports=ModelArticle