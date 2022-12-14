// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth'

import {
        // auth,
        signInWithGooglePopup, 
        // signInWithGoogleRedirect, 
        createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () =>{
    // useEffect(() =>{//callback
    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);

    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user)
    //         }
    // }
    // fetchData();
    // }, [])//run once when called

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log(user)
    //     }

    return(
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser} >
                Sign in with Google Popup
            </button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect} >
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default SignIn