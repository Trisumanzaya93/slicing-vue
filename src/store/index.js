import Vuex from 'vuex'
import product from './product'
import users from './users'
import videos from './videos'

export default new Vuex.Store({
    state:{
        number:0,
    },
    mutations:{
        ADD_NUMBER:(state,payload)=>{
            state.number += payload
        },
    },
    actions:{
        sum(contex){
            contex.commit("ADD_NUMBER",1)
        },
    },
    modules:{
        product,
        users,
        videos
    }
})