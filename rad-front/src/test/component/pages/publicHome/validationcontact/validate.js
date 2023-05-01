
const validateEmail=(email,setemailError)=>{
  const validateEmail=new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  return  email.match(validateEmail)?setemailError(''):setemailError('email is not valid')
}

const validatePhone=(phone,setPhoneerror)=>{
    const Phone=[0,1,2,3,4,5,6,7,8,9]
    let i=0
     phone.split('').map((number)=>{
      if(!Phone.includes(parseInt(number))){
        i++
        
      }
      
     
    })
    
   
    if((i>0)){
      return  setPhoneerror('phone is not valid! ') 
     }
     else if(phone.length!==8){
      return setPhoneerror('phone should be  8 numbers !') 
     }
     else{
       return setPhoneerror('') 
     }
    
    
   }
   const validateName=(name,setNameerror)=>{
    
   return  name.length<4? setNameerror('name is too short')
    :name.length>20 ? setNameerror('name is too long '): setNameerror('');
  
   
   }
   const validateMessage=(name,setMsgError)=>{
    
    return  name.length<10?setMsgError('message have been more than 10 letters '):
   name.length>200?setMsgError('message is  too long '):setMsgError('')
  }
 
   const validate={
      validateEmail,validatePhone,validateMessage,validateName
   }
export default validate