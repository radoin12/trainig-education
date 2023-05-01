const express=require('express')
const body_parser=require('body-parser')
 const mongoose=require('mongoose')
// model used to the server
  

  const cors=require('cors')
require('dotenv').config()
const app=express()

app.use(body_parser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors(
  {
    origin:"*",
  }
))


const url=process.env.url
const db=process.env.db1
//   cnx mongo db
   mongoose.connect(`${url}${db}`).then((cnx)=>{
    console.log( ` connect to ${url}${db}` )
   
   })
   .catch((err)=>{
    console.log("cnx is refused")
})


app.listen(process.env.port1,()=>{
    console.log("port is ",process.env.port1)
})
console.log("eeeee")


const routeemployer=require('./router/routeemplserver2')
app.use(routeemployer)
const routeruser=require('./router/routesever1')
app.use(routeruser)