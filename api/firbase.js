
import firebase from 'firebase'

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
// import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAOo04eL3vb0GOt6mWsCHVsptu7zRiVNEk",
    authDomain: "nickywebsit.firebaseapp.com",
    projectId: "nickywebsit",
    storageBucket: "nickywebsit.appspot.com",
    messagingSenderId: "1006235506043",
    appId: "1:1006235506043:web:bd33067a8730c3f9f899de",
    measurementId: "G-WMXMBN8MEW"
};


firebase.initializeApp(firebaseConfig);


export const db = firebase?.firestore();
export const auth = firebase?.auth();