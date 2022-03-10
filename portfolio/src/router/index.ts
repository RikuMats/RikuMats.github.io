import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ProfileView from "../views/ProfileView.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("../views/SkillsView.vue"),
  },
  {
    path: "/works",
    name: "works",
    component: () => import("../views/WorksView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
