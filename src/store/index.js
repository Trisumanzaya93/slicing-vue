import Vuex from "vuex";
import videoBelajar from "./videoBelajar";
import miniBootcamp from "./miniBootcamp";
import kelas from "./kelas";

export default new Vuex.Store({
  modules: {
    videoBelajar,
    miniBootcamp,
    kelas,
  },
});
