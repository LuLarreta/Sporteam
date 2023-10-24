<template>
    <div>
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="logInUser">
        <input v-model="email" type="email" placeholder="Correo electrónico">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from './../services/firebase';
  
  export default {
    name: 'LogIn',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async logInUser() {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
          const user = userCredential.user;
          console.log('Estas Logueado');
          // Puedes redirigir al usuario a su perfil o a la página de inicio después del inicio de sesión
        } catch (error) {
          console.error(error.message);
        }
      },
    },
  };
  </script>