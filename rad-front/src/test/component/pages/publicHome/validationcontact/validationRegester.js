

const validateEmail=(email,setError)=>{
    const validateEmail=new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  return email.match(validateEmail)?setError(''):setError('email should  have an name @ and extention 8 letters at least')
}
const validatePass=(pass,seterrorpass)=>{
    const validpassword="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$"
    return pass.match(validpassword)?seterrorpass(''):seterrorpass('Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
}

const validatename=(name,seterrorname)=>{
    return name.length<3 ?seterrorname('you have to enter 3 letters at least for your name'):
    name.length>20? seterrorname('your name should have 20 letters maximum'):seterrorname('')
}
const validateRegister={
    validateEmail,validatePass,validatename
}
export default validateRegister