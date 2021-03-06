import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDep-f60s9YinUKXc4sqgo18FDMk_AMGog",
    authDomain: "instagram-clone-react-fada2.firebaseapp.com",
    projectId: "instagram-clone-react-fada2",
    storageBucket: "instagram-clone-react-fada2.appspot.com",
    messagingSenderId: "838784867140",
    appId: "1:838784867140:web:744a71a2e85a3dc2695511",
    measurementId: "G-ZXLJJWZS8F"
});

//Grabbing all services from Firebase and storing them into all variables - Check tonight and tomorrow

const db = firebaseApp.firestore(); //Database
const auth = firebase.auth(); //Authentication for logins
const storage = firebase.storage(); //Storage for file uploadings and media

export { db, auth, storage };

