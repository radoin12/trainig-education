const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors())
const {validToken}=require('./model/modelUser')




// env secrute
require('dotenv').config()
console.log("password",process.env.password)
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
//*********** */ l'importation de route**************
const server=require('./router/route')
const routeemail=require('./router/routeemail')
app.use(server)
app.use(routeemail)


const port = process.env.port ||4000;

const url=process.env.url+process.env.db


//    ******************connection de la base de donner***************
  mongoose.connect(url).then((r)=>{
    console.log('name of database is '+ process.env.db )
    console.log(`data base is connected to ${url}`)



  })

  .catch((err)=>{
    console.log("conection is refuesed",err)
  });


//   **************creation la formulaire  de l'utilisateur type de request:post*******

 
 

app.listen(port, () => {console.log(`Example on port ${port}`)})


