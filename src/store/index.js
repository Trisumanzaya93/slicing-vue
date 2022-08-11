import Vuex from "vuex";
import videoBelajar from "./videoBelajar";
import miniBootcamp from "./miniBootcamp";
import kelas from "./kelas";
import auth from "./auth";

export default new Vuex.Store({
  modules: {
    videoBelajar,
    miniBootcamp,
    kelas,
    auth,
  },
});
