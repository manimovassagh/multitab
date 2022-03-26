import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    { path: "/home", component: () => import("../pages/home") },
    { path: "/about", component: () => import("../pages/about") }
  ]
});

export default router;
