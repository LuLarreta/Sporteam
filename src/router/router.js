// router/index.js
import { createRouter, createWebHistory } from "vue-router";

import  Home  from '../views/Home.vue';
import Products from '../views/Products.vue';
import LogIn from '../views/Login.vue';
import SignIn from '../views/Signin.vue';

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
  {
    path: "/Login",
    name: "Login",
    component: LogIn, // Asocia la vista Home con esta ruta
  },
  {
    path: "/SignIn",
    name: "Signin",
    component: SignIn, // Asocia la vista Home con esta ruta
  },
  // Otras rutas
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
