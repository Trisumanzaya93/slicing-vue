import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import "./index.css";
import store from "./store";

// createApp(App).use(router).mount("#app");

const app = createApp(App);
app.use(router);
app.use(store)
app.mount("#app");
