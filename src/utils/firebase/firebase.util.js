import { initializeApp } from 'firebase/app'; // captures everything required to get firebase runnning including internal servises
// creates an app instance based on app config
// this config is an object that allows us to attach firebase app instance to the online instance

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'; // for sign in module either through popup or redirect
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'; // doc allows to retrive & add data to firestore db (get, set)

// notes:
// firebase is a suite of tools and firestore is one of them
// authentication is different from firestore, firestore is schema-less db (pretty much a JSON obj, user defined var)

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

  // Initialize Authentication provider (we are using google as our authentication provider)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({      // so, everytime a user interacts with the provider we are forcing them to select an account
    prompt: "select_account"
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// after setting up authentication, take the data from authentication service and store it in firestore db
// firestore db model [collection -> document     -> data]
//                    [users      -> userAuth.uid -> displayName, email, createdAt]
export const db = getFirestore()

///\\\ userAuth contains data of a particular user once they sign in (accessToken, display name, email and MUCH more...) ///\\\
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);     // create an instance of the object/user to check it with db --- takes 3 arguments: 1-database instance, 2-collenctions, 3-unique identifier
  console.log(userDocRef);
  console.log(userAuth);


  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists()); // check if the reference exists in db and return T | F

  // if user does not exist then create -> setDoc from userAuth(user data object) in collection (firestore db)
  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // to record when the user has first signed in

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log('error creating the user', error.message);
    }
  }

  // if user exists then return userDocRef
  return userDocRef;
}