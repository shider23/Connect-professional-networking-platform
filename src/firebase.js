/* eslint-disable jsx-a11y/anchor-is-valid */
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCGd2Rrw2F5UpnhLUyxrGDtezQIAphYaxk",
    authDomain: "connect-f86dc.firebaseapp.com",
    projectId: "connect-f86dc",
    storageBucket: "connect-f86dc.appspot.com",
    messagingSenderId: "134450477513",
    appId: "1:134450477513:web:b49aaeed142294ce635018",
    measurementId: "G-H0VQ6TH9DB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider,storage};
export default db;