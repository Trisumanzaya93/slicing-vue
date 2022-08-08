import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Detail from "@/pages/Detail.vue";
import VidioBelajar from "@/pages/VidioBelajar.vue";
import DetailVideoBelajar from "@/pages/DetailVideoBelajar.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/detail-fullstack-web",
    component: Detail,
  },
  {
    path: "/module-belajar",
    component: VidioBelajar,
  },
  {
    path: "/detail-video-belajar",
    component: DetailVideoBelajar,
  },
];
