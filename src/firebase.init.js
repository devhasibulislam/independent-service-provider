// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6ztINca_gaumhc8C4vro8gUcfBxSnX4Y",
    authDomain: "independent-service-prov-5e182.firebaseapp.com",
    projectId: "independent-service-prov-5e182",
    storageBucket: "independent-service-prov-5e182.appspot.com",
    messagingSenderId: "697283242269",
    appId: "1:697283242269:web:432942df7c4e583cc4d9f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;