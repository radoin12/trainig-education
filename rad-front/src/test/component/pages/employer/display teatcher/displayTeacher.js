

const myinfo=(setInfo,setLoad)=>{
    try{
     fetch('http://localhost:1000/infoteacher')
     .then((r)=>r.json())
     .then((response)=>{
       
        if (response) {
            setInfo(response)   

        }
        
        setLoad(false)
       
     })
     .catch((err)=>{
        console.log(err)
        setLoad(false)
     })
    }
    catch(error){
        console.log(error)
    }
   }
   export default myinfo