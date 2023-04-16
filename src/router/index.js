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
    path: "/documents",
    name: "documents",
    component: () => import("../views/DocumentsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.loadSessionRoutes = function () {
  getPathsArray()?.forEach((path) => {
    router.addRoute({
      path: encodeURI(path),
      name: path,
      component: () => import("@/views/DocumentsView.vue"),
    });
  });
};

export default router;
