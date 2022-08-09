export default {
    dataUsers:(state)=>{
        return {
            isLoading:state.isLoading,
            data:state.listUsers
        }
    }
}