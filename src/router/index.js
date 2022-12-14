import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../components/CiphersIndex.vue"),
      children: [
        {
          path: "/vigenere",
          name: "Vigenère",
          component: () => import("../components/VigenèreCipher.vue"),
        },
        {
          path: "/atbash",
          name: "Atbash",
          component: () => import("../components/AtbashCipher.vue"),
        },
        {
          path: "",
          name: "Caeser",
          component: () => import("../components/CaeserCipher.vue"),
          alias: "caeser",
        },
      ],
    },
  ],
});

export default router;
