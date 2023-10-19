// router/index.js
import { createRouter, createWebHistory } from "vue-router";

import  Home  from '../views/Home.vue';
import Products from '../views/Products.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, // Asocia la vista Home con esta ruta
  },
  {
    path: "/Products",
    name: "Products",
    component: Products, // Asocia la vista Home con esta ruta
  },
  // Otras rutas
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
