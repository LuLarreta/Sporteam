<template>
    <div>
        <h2>Registro</h2>
        <form @submit.prevent="signInUser">
            <input v-model="name" type="text" placeholder="Nombre">
            <input v-model="email" type="email" placeholder="Correo electrónico">
            <input v-model="password" type="password" placeholder="Contraseña">
            <button type="submit">Registrarse</button>
        </form>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from './../services/firebase';


export default {
    name: 'SingIn',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            rol: 'user',
        };
    },
    methods: {
        async signInUser() {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                const user = userCredential.user;
                await addDoc(collection(db, 'users'), {
                    name: this.name,
                    email: this.email,
                    rol: 'user',
                });
                console.log('Usuario registrado con éxito.');
            } catch (error) {
                console.error(error.message);
            }
        },
    },
}
</script>