import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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

const setPathsStorage = (path) => {
  const itemName = "documentsPaths";

  if (!sessionStorage.getItem(itemName)) {
    sessionStorage.setItem(itemName, []);
  }

  const pathsArray = getPathsArray();

  if (pathsArray.includes(path)) {
    return;
  }

  pathsArray.push(path);

  sessionStorage.setItem(itemName, pathsArray);
};

function getPathsArray() {
  const itemName = "documentsPaths";

  const pathsArray = sessionStorage.getItem(itemName)?.split(",");

  if (!pathsArray) {
    return;
  }

  if (pathsArray.at(0) === "" && pathsArray.length === 1) {
    return [];
  }

  return pathsArray;
}

function addRoute(fullpath) {
  let prettyPath = fullpath.split("/").splice(2).join("/");

  let slash = "/";
  !prettyPath && (slash = "");

  const resultingPath = "/main/documents" + slash + prettyPath;

  router.addRoute({
    path: resultingPath,
    name: resultingPath,
    props: true,
    component: () => import("@/views/MainView.vue"),
    beforeEnter: () => {
      console.log("rote");
      // openStorageFolder(fullpath);
    },
  });

  return resultingPath;
}
