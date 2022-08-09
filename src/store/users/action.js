import axios from "axios"
export default {
    getUsers(contex){
        contex.commit("GET_USER_PENDING")
        axios.get("http://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response);
            contex.commit("GET_USER_FULFIELD",response.data)
        }).catch((err)=>{
            console.log(err);
        })
    }   
}