import { db } from './firebase.js';
import {addDoc, collection, onSnapshot} from "firebase/firestore";

const refChat = collection(db, 'chats');

export function chatGuardarMsj(data) {
    return addDoc(refChat, data);
}

export function chatSubscribeToMessages(callback) {
    onSnapshot(refChat, snapshot => {
        // Transformamos el snapshot a un array de objetos que tengan solo los datos de cada mensaje.
        const data = snapshot.docs.map(doc => {
            return {
                usuario: doc.data().usuario,
                msj: doc.data().msj,
            };
        });

        // Invocamos el callback recibido por parámetro con el array de objetos creado.
        callback(data);
    });
}

