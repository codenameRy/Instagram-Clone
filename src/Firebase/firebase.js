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

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
  };

export { db, auth, storage }

  export default firebaseConfig;