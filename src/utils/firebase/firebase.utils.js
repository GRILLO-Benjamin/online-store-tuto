import { initializeApp } from "firebase/app";
import { getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider } from 'firebase/auth';
import { getFirestore,
        doc, 
        getDoc, 
        setDoc
} from 'firebase/firestore'

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)  => {
    const userDocRef = doc( db, 'users', userAuth.uid );

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists());


    if(!userSnapshot.exists())    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt
            }) ;
        } catch (error) {
            console.log('error while creating the user', error.message);
        }
    }

    return userDocRef;
};