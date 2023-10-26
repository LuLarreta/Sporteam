import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from './firebase';

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
> console.error(error.message);
