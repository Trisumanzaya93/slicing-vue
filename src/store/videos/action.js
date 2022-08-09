import axios from "axios"
export default {
    getVideos(contex){
        contex.commit("GET_VIDEOS_PENDING")
        axios.get(`${process.env.VUE_APP_API_URL}videos`).then((response)=>{
            console.log(response);
            contex.commit("GET_VIDEOS_FULFIELD",response.data.data)
        }).catch((err)=>{
            console.log(err);
            contex.commit("GET_VIDEOS_REJECTED")
        })
    }   
}