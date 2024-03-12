import { initializeApp } from 'firebase/app'; // captures everything required to get firebase runnning including internal servises
// creates an app instance based on app config
// this config is an object that allows us to attach firebase app instance to the online instance

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'; // for sign in module either through popup or redirect

//firebase is a suite of tools and firestore is one of them

const firebaseConfig = {
    apiKey: "AIzaSyAfBz10pvDCuK8JuEHqcQ5mPV93F2RVWHc",    // usually abstract api key but firabase needs this key (not a secret key)
    authDomain: "thrift-shop---db.firebaseapp.com",
    projectId: "thrift-shop---db",
    storageBucket: "thrift-shop---db.appspot.com",
    messagingSenderId: "586625985500",
    appId: "1:586625985500:web:102e61fb916a3cdcea7d19"
  };

  // Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

  // Initialize provider for Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({      // so, everytime a user interacts with the provider we are forcing them to select an account
    prompt: "select_account"
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);