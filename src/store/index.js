import Vuex from 'vuex'
import videoBelajar from "./videoBelajar"
import miniBootcamp from './miniBootcamp'
import auth from './auth'

export default new Vuex.Store({
    modules:{
        videoBelajar,
        miniBootcamp,
        auth
    }
})