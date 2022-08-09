import axios from 'axios'

export default {
    namespaced:true,
    state:{
        listPhotos:[],
        isLoading:false
    },
    mutations:{
        GET_PHOTOS_PENDING : (state) => {
            state.isLoading =true
        },
        GET_PHOTOS_FULFIELD:(state,payload)=>{
            state.isLoading=false
            state.listPhotos=payload
        }
    },
    actions:{
        getPhotos(contex){
            contex.commit("GET_PHOTOS_PENDING")
            axios.get("http://jsonplaceholder.typicode.com/photos").then((response)=>{
                console.log(response);
                contex.commit("GET_PHOTOS_FULFIELD",response.data)
            }).catch((err)=>{
                console.log(err);
            })
        }
    },
    getters:{
        dataPhotos:(state)=>{
            return {
                isLoading:state.isLoading,
                data:state.listPhotos
            }
        }
    }
}