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
import CrowdFunding from "./views/CrowdFunding";
import Credit from "./views/Credit";
import CreditRequest from "./views/CreditRequest";

export const emitter = mitt();

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/users", name: "User", component: User },
  { path: "/partner/monthly-saving", name: "MonthlySaving", component: MonthlySaving },
  { path: "/partner/crowd-funding", name: "CrowdFunding", component: CrowdFunding },
  { path: "/partner/credits", name: "Credit", component: Credit },
  { path: "/advisor/credit-request", name: "CreditRequest", component: CreditRequest },
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
