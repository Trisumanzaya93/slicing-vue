import Vuex from "vuex";
import auth from "./auth";
import kelas from "./kelas";
import videoBelajar from "./videoBelajar";
import miniBootcamp from "./miniBootcamp";
import detailVideoBelajar from "./detailVideoBelajar";

export default new Vuex.Store({
  modules: {
    auth,
    kelas,
    videoBelajar,
    miniBootcamp,
    detailVideoBelajar,
  },
});
