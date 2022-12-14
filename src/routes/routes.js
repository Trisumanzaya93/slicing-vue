import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Detail from "@/pages/Detail.vue";
import VidioBelajar from "@/pages/VidioBelajar.vue";
import DetailVideoBelajar from "@/pages/DetailVideoBelajar.vue";
import MiniBootcamp from "@/pages/MiniBootcamp.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

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
    path: "/kelas/:id",
    component: Detail,
  },
  {
    path: "/video-belajar",
    component: VidioBelajar,
  },
  {
    path: "/mini-bootcamp",
    component: MiniBootcamp,
  },
  {
    path: "/video-belajar/:id",
    component: DetailVideoBelajar,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];
