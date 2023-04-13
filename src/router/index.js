import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { getPathsArray } from "@/modules/pathsStorage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/MainView.vue"),
  },

  {
    path: "/main/:id",
    name: "mainId",
    props: true,
    component: () => import("../views/MainView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

getPathsArray()?.forEach((path) => {
  router.addRoute({
    path,
    name: path,
    component: () => import("@/views/MainView.vue"),
  });
});

export default router;
