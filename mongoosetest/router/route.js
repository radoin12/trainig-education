const express=require('express')
 const {validateUserRegister,valdateobid,validateIdteacher}=require('../midllware/userAuth')
const authorisation=require('../midllware/authLogin')
const{validToken}=require('../model/modelUser')
const router=express.Router()
 const{
    mise_a_jour,deleteuser,afficheuser,ajoutuser,
    displaymyInput,upDating,testingg,
    afficheMatiere,
    ajoutArticle
    ,matiereForClient,
    takeId,addComent,
    afficheTabArticle,deleteMatiere,changeElementMatiere
    ,detailUser,detailsUser,
    updateUser,refreshToken,
    addComentUser, addNewTeacher,
     infoteacher,deleteTeacher,
     updteTeacher,deleteComment,
     updatecomments,
     afficheusercomment
               }=require('../controller')



// router profile
router.route('/information').get(authorisation,detailsUser)
//  refresh Token
router.route('/refresh').post(refreshToken)
// creation client
router.route('/addUser').post(valdateobid,validateUserRegister,ajoutuser)
// affiche client
router.route('/affiche').get(afficheuser)
// delete user
router.route('/form:i').delete(deleteuser)
// display only user
router.route('/detailUser').get(detailUser)
//up date user
router.route('/update:age').get(upDating)
router.route('/update:age').post(mise_a_jour)
 router.route('/displayinput').get(displaymyInput)
// up date one user authenticator
 router.route('/update/me').post(authorisation,updateUser)
 router.route('/login').post(testingg)
 // ajout table matiere
router.route('/addMatiere').post(validateIdteacher,matiereForClient)
//  affiche table de matiere
 router.route('/matiere').get(afficheMatiere)
 //delete matiere
 router.route('/deleteMatiere/:id').delete(deleteMatiere)
//  up date collection matiere

   router.route('/updateMatiere:id').put(changeElementMatiere)

   // *************affiche article**********
   router.route('/afficheArticle').get(afficheTabArticle)
//  **********ajout article************
router.route('/article').post(ajoutArticle)


//************add id matiere to client*************
router.route('/display:us/:mat').get(takeId)


// *************add coment to article***********
router.route('/addComent:myarticle').post(addComent)
// add comment user 
router.route('/addComent').post(authorisation,addComentUser)
router.route('/deletecomment/:id').delete(authorisation,deleteComment)
// update comment user
router.route('/updatecomment/:id').put(authorisation,updatecomments)
// add new teacher
router.route('/addTeacher').post(addNewTeacher)
// get info teacher
router.route('/infoteacher').get(infoteacher)
// delete teacher
router.route('/deleteTeacher/:id').delete(deleteTeacher)
// up date teacher
router.route('/updateTeacher/:id').put(updteTeacher)

// affiche comment  user sort

router.route('/comment').get(afficheusercomment)

//  exportation router
module.exports=router