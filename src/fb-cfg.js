// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
/*import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";*/
import { getDatabase } from "firebase/database";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDe5-LmUYRzZoiEquB4Dhyv1lJRUQKyM6Q",
    authDomain: "reactproject-c08b3.firebaseapp.com",
    projectId: "reactproject-c08b3",
    storageBucket: "reactproject-c08b3.appspot.com",
    messagingSenderId: "112861140876",
    appId: "1:112861140876:web:81142d944f8946d05ce8a9",
    measurementId: "G-6K8VWZG66C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LeYFaYpAAAAAOPHZeTWJq2XRBRPZftDlhT8F6Vv'),
    isTokenAutoRefreshEnabled: true
});*/

export const auth = getAuth(app);
export const db = getFirestore(app);

export const database = getDatabase(app);