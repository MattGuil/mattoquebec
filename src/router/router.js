import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Preface",
    component: () => import("@/views/Preface.vue"),
  },
  {
    path: "/preparatifs",
    name: "Preparatifs",
    component: () => import("@/views/Preparatifs.vue"),
  },
  {
    path: "/voyage",
    name: "Voyage",
    component: () => import("@/views/Voyage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;