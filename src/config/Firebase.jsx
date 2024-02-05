// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import productos from "../data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZuu3YiTVi58RnS9DXobc4lIOryX-L4xg",
  authDomain: "proyectofinalabadi.firebaseapp.com",
  projectId: "proyectofinalabadi",
  storageBucket: "proyectofinalabadi.appspot.com",
  messagingSenderId: "627147640104",
  appId: "1:627147640104:web:839ef497fa5fa9db3a541d"
};

console.log('se conecto Firebase')

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


productos.forEach((producto) => {
    addDoc(collection(db, 'productos'), producto)
        .then((docRef) => {
            console.log(`se agregó el documento con id: ${docRef.id}`)
        })
        .catch((error) => console.log(error))
  })
