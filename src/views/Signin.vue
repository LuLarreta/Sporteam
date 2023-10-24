<template>
    <div>
        <h2>Registro</h2>
        <form @submit.prevent="signInUser">
            <input v-model="email" type="email" placeholder="Correo electrónico">
            <input v-model="password" type="password" placeholder="Contraseña">
            <button type="submit">Registrarse</button>
        </form>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../services/firebase';


export default {
    name: 'SingIn',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async signInUser() {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                const user = userCredential.user;
                await setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    rol: 'comun',
                });
                    // Puedes redirigir al usuario a su perfil o a la página de inicio después del registro
                } catch (error) {
                    console.error(error.message);
                }
            },
        },
    };
</script>