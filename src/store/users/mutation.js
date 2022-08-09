export default {
    GET_USER_PENDING : (state) => {
        state.isLoading =true
    },
    GET_USER_FULFIELD:(state,payload)=>{
        state.isLoading=false
        state.listUsers=payload
    }
}