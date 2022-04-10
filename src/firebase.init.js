// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbs6Vg4e5ckQfLHJmC9HpO1FXM7am2M04",
    authDomain: "ema-john-with-router-2d8e3.firebaseapp.com",
    projectId: "ema-john-with-router-2d8e3",
    storageBucket: "ema-john-with-router-2d8e3.appspot.com",
    messagingSenderId: "1026688614956",
    appId: "1:1026688614956:web:5c28f36a60fff86ff14789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;