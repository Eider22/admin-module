import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import mitt from 'mitt'
import { createRouter, createWebHistory } from "vue-router/dist/vue-router";
import User from "./views/User.vue";
import Home from "./views/Home";
import MonthlySaving from "./views/MonthlySaving";

export const emitter = mitt();

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/users", name: "User", component: User },
  { path: "/monthly-saving", name: "MonthlySaving", component: MonthlySaving }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(ElementPlus);
app.mount("#app");
