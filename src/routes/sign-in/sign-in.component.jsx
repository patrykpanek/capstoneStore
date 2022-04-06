import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utlis/firebase/fireabse.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
    
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    } 

    

    return(
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in With Google
            </button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;