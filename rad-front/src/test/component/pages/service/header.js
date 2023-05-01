
export default  function AuthHeader(){
 const user=JSON.parse(localStorage.getItem('user'))
 if (user&& user.addToken) {
     return {
        "Authorization": "Bearer "+user.addToken
     }
 }
 else{
    return{}
 }

}