const nodemailer = require("nodemailer");

require('dotenv').config()
console.log("email",process.env.email)
const sendemail=(req,res)=>{
     try{
        const{name,email,phone,message}=req.body
       
        const transporter=nodemailer.createTransport({
          service:'gmail',
          auth:{
              user:process.env.email,
              pass:process.env.pass
          },
          port:465,
          host:'smtp.gmail.com'
        })
         
        const option={
          from:req.body.email,
          to:process.env.email,
          subject:`message from center traning`,
          text:'req.body.message',
           html:`<div style="width:100%; background-color: white;padding:5rem;border:1px solid white">
            <div style="border:1px solid red; width:50% ;margin:10px center;padding:25px ; font-size: 20px">
             <h2 style="color:green ;text-align:center;border-bottom:1px red; font-size: 25px; font-style: italic;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"> message from ${req.body.name}<h2/>
             <p>phone:${req.body.phone}</p>
           
             <p style="">email:${req.body.email}</p>
             <p>message:${req.body.message}</p>
             <div>
          
             </div>`
          
          
        }
        transporter.sendMail(option,(error,info)=>{
          if (error) {
             return  res.status(500).send('sending email is failed ')
          }
          else{
            res.send("success")
          
          }
          
        })
       
     }
        
     catch(err){
        res.send(err)
    }
 

}






module.exports=sendemail