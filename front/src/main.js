import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import Advisor from "./views/Advisor.vue";
import { createRouter, createWebHistory } from "vue-router/dist/vue-router";

const routes = [{ path: "/", component: Advisor }];

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
