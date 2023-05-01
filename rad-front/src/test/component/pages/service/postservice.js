


import instance from "./api";
const getPriveteProfile=()=>{

    return instance.get('http://localhost:1000/profile')
}


const PrivateInfo={
    getPriveteProfile
}
export default PrivateInfo