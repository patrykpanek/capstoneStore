import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { async } from '@firebase/util';

const firebaseConfig = {
  apiKey: 'AIzaSyDlwmYTNj3KMRvZq2MhtrsqECX7T1nIIIU',
  authDomain: 'capstone-7b6cb.firebaseapp.com',
  projectId: 'capstone-7b6cb',
  storageBucket: 'capstone-7b6cb.appspot.com',
  messagingSenderId: '386161168748',
  appId: '1:386161168748:web:aa98ebf58b2abd078be349',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
