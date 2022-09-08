import { initializeApp } from "firebase/app";

import { getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMI3ApH1V8I_yJiTUa6sInAfWM1z8H9l0",
  authDomain: "online-shopping-tuto.firebaseapp.com",
  projectId: "online-shopping-tuto",
  storageBucket: "online-shopping-tuto.appspot.com",
  messagingSenderId: "739226237262",
  appId: "1:739226237262:web:7a8d000475ba186a9e461f"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)