

const {modelUser,matiereClient,validateuser,validateuserUpdate}=require('./model/modelUser')
const teacher=require('./model/modelTeatcher')
const ModelArticle=require('./model/modelArticle')
require('dotenv').config()
const jwt =require('jsonwebtoken')
const asynckhandler=require('express-async-handler')
const authorisation=require('./midllware/authLogin')
const  mongoose = require('mongoose')
const _=require('lodash')
//   ***********cryptage for password**************
    const bcrypt=require('bcrypt')



const displaymyInput=(req,res)=>{

    res.send('<form method=post action="/addUser"><label>name</label><input name="name"/> <label>age</label><input name="age"/> <label>password</label><input name="password"/><label>email</label><input name="email"/><label>link</label><input name="link"/><button>click</button><a href="/update63e81fac77577688ae4821f0">edit</a></form>')
}
const upDating=(req,res)=>{

    res.send('<form method=post><label>name</label><input name="name"/><label>password</label><input name="password"/><label>email</label><input name="email"/><label>link</label><input name="link"/><button>click</button></form>')
}


  
// **********************************ajout matiere client********************


const matiereForClient=async(req,res)=>{
  try{
    const addMatiere=await new matiereClient({
        name:req.body.name ,
        price:req.body.price,
        level:req.body.level,
        file:req.body.file,
        dateInitial:req.body.dateInitial,
        numberHour:req.body.numberHour,
         prof:req.body.prof

     })
         await addMatiere.save()
         res.send('succes')

  }
   catch(err){
    res.send(err.message)
   }
     
       
     
}
// add teatch information

const addNewTeacher=async(req,res)=>{
  try{
    const{name,experience,salary,image}=req.body
    const teachers=await teacher.create({
     name,experience,salary,image
    })
    res.json(teachers)
  }
  catch(err){
    res.status(500).send(err)
  }

}
// display all techers in our center


const infoteacher=async(req,res)=>{
  try {
    const infoteachers= await teacher.find({}).sort({'experience':-1})
    res.send(infoteachers)
  } catch (error) {
    res.send(error)
  }

}

// delete teachere
const deleteTeacher=async(req,res)=>{
 try {
  const id=req.params.id
  const deletedTeacher= await teacher.findByIdAndDelete(id)
  res.json('teacher is deleted')
 } catch (error) {
 res.send(error)
 }
}
//  up date teacher
const updteTeacher=(req,res)=>{
  const id=req.params.id
  
   teacher.findByIdAndUpdate(id,req.body,{new:true})
   .then((updated)=>{
    res.send(updated)
   })
   .catch((err)=>{
    res.send(err)
   })
}

   
//  find ownly user profile


const detailsUser=async(req,res)=>{
   const user=await modelUser.findById(req.user._id).populate({path:'matiere',   populate: {path: 'prof',select:'-salary'}})
    res.send(user) 
  
      
}

// =======================ajout client============================


 



const ajoutuser=async(req,res)=>{

 
    
   
       try {
     
        
        const {name,password, confirmPassword,email,link,age}=req.body
       const t=await validateuser({name,password,confirmPassword,email,link,age})
      const r= await modelUser.findOne({email:req.body.email})
    
           

       
           
                     
                    
                     
                  
                  
                        
                       
                      
                      const salt=await bcrypt.genSalt(10)
                      const cryptpassword=await  bcrypt.hash(req.body.password,salt)
            
                     
                      




                     
                            const reg= await new modelUser(( {
                       
                                name:req.body.name,
                                password:cryptpassword,
                                confirmPassword:cryptpassword,
                                email:req.body.email,
                                link:req.body.link,
                                age:req.body.age,
                               
                                option:req.body.option,
                                matiere:req.body.matiere
                                
                                
                               
                             })
                                
                               ) 
                           
                              
                            
                        


                            
                         
                        
                    


                                        
                        
                                let token=await reg.authandSaveToken()
                              
                                console.log(token)
                                res.json(reg).select('name')
                            

                    
                   
                     
                
               
                }

                catch(err){
                
                 
                  res.status(403).send(err.details)

                   }
           
      
                   
                  

}
     //    addd id matiere to user

     const takeId=asynckhandler(async(req,res)=>{
        let user=(req.params.us)
        let mat=req.params.mat
        console.log(mat)
        console.log("useeeerId",user)
      
     
        const tabuser=await modelUser.findById(((user)))
              tabuser.matiere=mat
                res.send(await tabuser.populate('matiere'))
                console.log(await tabuser.populate('matiere'))

     })

   
const addComentUser=async(req,res)=>{
  try {
    let user=await modelUser.findById(req.user._id)
    const {content}=req.body
    user.comment.push({
        content
    })
   await  user.save()
    res.send(user) 
  } 
  catch (error) {
    res.status(403).json(error)
  }
  
}

// delete comment user
const deleteComment=async(req,res)=>{
  try {
   const id=req.params.id
    
     const c=await modelUser.findById(req.user._id)
       
     const pos= c.comment.findIndex(obj => obj.id === id)
     console.log("commmnt",pos) 
     if (pos>-1) {
     c.comment.splice(pos,1)
       await c.save()
      res.send('deleted')
     }
     else{
      res.send('comment is not founded')
     }
  
    
  } 
  catch (error) {
    res.send(error)
  }
}
  //  up date comment

  const updatecomments=async(req,res)=>{
    try {
      const id=req.params.id
    
      const updatedcomment= await modelUser.findById(req.user._id)
     
      const{content}=req.body
       console.log(content)
      
      if (content==="") {
        return res.json('path is required')
      }
       const pos=updatedcomment.comment.find((data)=>data.id===id)
       console.log(pos,"ddddddddddddddddddddddddd")
         { pos.content=content,
          pos.date=new Date()
            
        }
     
         updatedcomment.save()
       res.json('succes')
    
    } catch (error) {
      res.send(error)
    }

   

  }



//    add coment to article
const addComent=asynckhandler(async(req,res)=>{
    let myarticle=req.params.myarticle
    const article=await ModelArticle.findById(myarticle)
      article.comnt.push({
        name:req.body.name,
        message:req.body.message
    })
            article.save()
       res.send(article)
})

// affiche article
const afficheTabArticle=asynckhandler(async(req,res)=>{
    const displayArticle=await ModelArticle.find({})
    res.json(displayArticle)
})


// ************up date user***************
 const updateUser=(async(req,res)=>{
 
  try{
    const salt=await bcrypt.genSaltSync(10)
    const cryptpassword=await  bcrypt.hashSync(req.body.password,salt)
    const{name,password,confirmPassword,age,link}=req.body
        await validateuserUpdate({name,password,age,link,confirmPassword})
    const userChanged= await modelUser.findByIdAndUpdate(req.user._id,{

      name:req.body.name,
      age:req.body.age,
      link:req.body.link,
      password:cryptpassword,
      confirmPassword:cryptpassword
    },{new:true})
   
    res.json(userChanged)
     
    }
  
    
    
    
  
      
  
  
  
  catch(err){
   console.log(err)
  }
   
 })




  // refreshToken
  let  refreshTokens=[]
  console.log("taaaaaaaaaaaaaab",refreshTokens)
  const refreshToken=(req,res)=>{
 
  
      const refreshTok=req.body.token
      if (!refreshTok) {
        return res.status(403).send('not authenticated') 
      }
      console.log("taaaaaaaaaaaaaabfrefresh",refreshTokens)
      if (!refreshTokens.includes(refreshTok)) {
        return res.status(401).send('invalid token !!') 
      }
      jwt.verify(refreshTok,process.env.refreshToken,(err,user)=>{

        err&&console.log('rrrfr')
       
       
       refreshTokens= refreshTokens.filter((token)=>token!==refreshTok)  
       
          const{_id,link,isAdmin,name}=user
          let newAccesToken=  jwt.sign({_id,link,isAdmin,name},process.env.privateKey,{expiresIn:'5s'})
          let  Newrefreshtoken=jwt.sign({_id,link,isAdmin,name},process.env.refreshToken)
        
          refreshTokens.push(Newrefreshtoken)
         
          res.json({accessToken:newAccesToken,refreshToken:Newrefreshtoken})
        })
          }

       
    
      
   
      
  
     
  
  

  
  
  
 

//   *******************test login user************
  const testingg=async(req,res)=>{
    const userEmail= await modelUser.findOne({email:req.body.email})
    try{ 
        const testpassword=await bcrypt.compare(req.body.password,userEmail.password)
       
        
        const testmail=await modelUser.exists({email:req.body.email}) 
        if (testmail && testpassword) {
           let addToken= await userEmail.authandSaveToken()
             let refreshToken=await userEmail.generateRefreshToken()
             refreshTokens.push(refreshToken)
           
            res.json({addToken,refreshToken})
      
        }
        
        else if(!testpassword){
         return res.json('password failed or email')
        }
       
      
      
    }
    catch(err){
      console.log(err)
      res.json("password failed or email")
    }
  }

// **************************** affiche matiere pour toute les clients***********************

const afficheMatiere=async(req,res)=>{
  try {
    

    const { q }=req.query
    
    
    console.log(q)
    const keys=["name"]
    const sea=(data)=>{
      return data.filter((d)=>keys.some((k)=>d[k].includes(q))
     
        ) ;
    };
    const matiere=await matiereClient.find({}).populate({path:'prof'})

    res.json(sea(matiere) )
  } catch (error) {
    res.send(error)
  }

}

//    delete matiere

const deleteMatiere=asynckhandler(async(req,res)=>{
    const id=req.params.id
    console.log("id",id)
    const deleted=await matiereClient.findByIdAndDelete(id)
    res.json('deleted')
})
// update collection matiere
  const changeElementMatiere=(req,res)=>{
    let id=req.params.id
       matiereClient.findByIdAndUpdate(id,req.body,{new:true})
    .then((success)=>{
        res.send(success)
    })
    .catch((err)=>{
        res.status(500).json(err.message)
    })
  }

//    error handle form user
     
  
    const  errorHandler=(myerror)=>{
        let po=[]
        let obj={}
       let o=myerror.substr(myerror.indexOf(':')+1).split(",")
       let j=o.map(r=>r.trim())
           j.map(e=>{
                 po.push(e.split(":"))
                
            })
            po.map((e)=>{
                const [lik,bik]=e
              
                obj[lik]=bik
            })
            return obj
    }
    
     
       
           // affiche user only
           
           const detailUser=(req,res)=>{
              const infoUser= modelUser.findById(req.user._id)
            
              .then((user)=>{
                res.send(user)
              })
              .catch((err)=>{
                res.send(err)
              })
           }





//  ******************* affich l'inscription du client*******************
    const afficheuser=(req,res)=>{
      const {user}=req.query
      console.log(user)
      const  searchUser=(data)=>{
       return data.filter((item)=>
       item.name.toLowerCase().includes(user)||
       item.age>parseInt(user)
       )
      }
      modelUser.find().populate({path:'matiere',populate:{path:'prof',select:'-salary'}}).sort({createdAt:1}).then((tabreg)=>{
      
        res.json(searchUser(tabreg))
    })
    .catch((err)=>{
      res.send(err)
    })
    }
    // affiche user with sort comment
    const afficheusercomment=(req,res)=>{
     
      modelUser.aggregate([
  
       {$unwind:'$comment'},
        {
          $project:
          
          {
            _id:{comment:{date:'$comment.date',content:'$comment.content'}
        
           },
           name:'$name',
           link:'$link',
           avgage:{$avg:'$age'}
      
      }
    },
      
        {$sort:{_id:1}}

])


       .then((r)=>{
        console.log(r)
        res.json(r)
       })
       .catch((err)=>{
        console.log(err)
        res.send(err)
       })
    }

//deletes user
   const deleteuser= (req,res)=>{
    let ind=req.params.i
    modelUser.findByIdAndDelete(ind).then((r)=>{
        res.json(r) 
    })
   
  }
// up date
const mise_a_jour =(req,res)=>{
    let indd=req.params.age
    console.log(indd)
    modelUser.findByIdAndUpdate(indd,{
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        link:req.body.link
    },{new:true}).then((t)=>{
        res.json(t)
    })
}
// *****************************************ajout article************************

 const ajoutArticle=asynckhandler (async(req,res)=>{
      
            const creationArticle= await new ModelArticle({
                name:req.body.name,
                price:req.body.price,
                description:req.body.description,
                categorie:req.body.categorie
          
              }) 
              await creationArticle.save()
               res.status(200).send(creationArticle)
               
            })
        

           
      
             
        
       
         
      
     
 




module.exports={
    
    mise_a_jour,
    deleteuser,afficheuser
    ,ajoutuser,displaymyInput,
    upDating,testingg,
    afficheMatiere,ajoutArticle,
    matiereForClient,
    takeId,addComent,
    afficheTabArticle,
    deleteMatiere,changeElementMatiere,
    detailUser,detailsUser,
    updateUser,refreshToken,
    addComentUser, addNewTeacher
    ,infoteacher,deleteTeacher,
    updteTeacher,deleteComment,
    updatecomments,
    afficheusercomment


}