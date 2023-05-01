const express=require('express')
const email=require('../email/sendmail')
const router=express.Router()


router.route('/contactus').post(email)



module.exports=router