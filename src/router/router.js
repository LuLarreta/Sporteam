// router/index.js
import { createRouter, createWebHistory } from "vue-router";

import  Home  from '../views/Home.vue';
import Products from '../views/Products.vue';
import LogIn from '../views/Login.vue';
import SingIn from '../views/Singin.vue';
import Admin from '../views/Admin.vue';

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
    path: "/SingIn",
    name: "Singin",
    component: SingIn, // Asocia la vista Home con esta ruta
  },
  {
    //path: "/Admin",
   // name: "adminProductos",
   // component: Admin, // Asocia la vista Home con esta ruta
  },

  // Otras rutas
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
