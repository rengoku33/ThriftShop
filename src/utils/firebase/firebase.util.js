import { initializeApp } from 'firebase/app'; 
// captures everything required to get firebase runnning including internal servises
// creates an app instance based on app config
// this config is an object that allows us to attach firebase app instance to the online instance

import {getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, onAuthStateChanged} from 'firebase/auth'; // for sign in module either through popup or redirect
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'; // doc allows to retrive & add data to firestore db (get, set)

//------------------------------------------------------sign in with google (token based auth)----------------------------------------------------
// >>> altered createCreateUserDocumentFromAuth to fit in email and pass sign in 
// (to pass in display name which is inbuilt in google but not getting passed on email and pass signin)
// so, we are passing it from form element which is updated using useState and triggered on submit button

const firebaseConfig = {
    apiKey: "AIzaSyAfBz10pvDCuK8JuEHqcQ5mPV93F2RVWHc",    // usually abstract api key but firabase needs this key (not a secret key)
    authDomain: "thrift-shop---db.firebaseapp.com",
    projectId: "thrift-shop---db",
    storageBucket: "thrift-shop---db.appspot.com",
    messagingSenderId: "586625985500",
    appId: "1:586625985500:web:102e61fb916a3cdcea7d19"
  };

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Authentication provider (we are using google as our authentication provider)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({      // so, everytime a user interacts with the provider we are forcing them to select an account
    prompt: "select_account"
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// after setting up authentication, take the data from authentication service and store it in firestore db
export const db = getFirestore()

// retriving products from db -updated
// collectionKey = name of collection
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);  // requesting to fetch a collection by passing its name

// writeBatch method imported from firestore produces a batch
// batch allows you to attach a bunch of different (writes, deletes, sets)
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {                                  // the object mentioned here represebts seperate elements/ documents/ products
    const docRef = doc(collectionRef, object.title.toLowerCase());    // collectionRef tells the doc method on which DB we are using, ket Value = obkect.title
    batch.set(docRef, object);                                        // set that location(docRef) with the value of the JSON object(object)
  }); // iterated over each individual object in the array, added batch.set call -> creating a new docRef for each of those objects (key= title, value= object)
  
  await batch.commit();
  //console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);                                       // generate a query off of the collection ref
  
  const querySnapshot = await getDocs(q);                               // fetch and store the data in querySnapshot
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => { // acc = accumulator
    const { title, items } = docSnapshot.data();                        // de-structure
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}

///\\\ userAuth contains data of a particular user once they sign in (accessToken, display name, email and MUCH more...) ///\\\
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => { // additional info will not work for signin using google but when email and pass it will store the display name

  if(!userAuth) return; // if we do not receuve data then return

  const userDocRef = doc(db, 'users', userAuth.uid);     
  // create an instance of the object/user to check it with db --- takes 3 arguments: 1-database instance, 2-collenctions, 3-unique identifier

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot.exists()); // uncomment to check if the reference exists in db and return T | F

  // if user does not exist then create -> setDoc from userAuth(user data object) in collection (firestore db)
  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // to record when the user has first signed in

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation, // add the display name only when signed in using email and pass 
      });
    }catch(error){
      console.log('error creating the user', error.message);
    }
  }

  // if user exists then return userDocRef
  return userDocRef;
}

//------------------------------------------------------sign up with email and pass----------------------------------------------------

export const createAuthUserWithEmailAndPass = async (email, password) => {

  if(!email || !password) return; // return even if one of them is missing

  return await createUserWithEmailAndPassword(auth, email, password); 
  // we are passing email and pass to auth variable which holds getAuth function (check linke 28)
  // getAuth is an inbuilt function imported from firebase, it will check if record is present and if not it will create one
};

//------------------------------------------------------sign in with email and pass----------------------------------------------------

export const signInAuthUserWithEmailAndPass = async (email, password) => {

  if(!email || !password) return; // return even if one of them is missing

  return await signInWithEmailAndPassword(auth, email, password); 
  // we are passing email and pass to auth variable which holds getAuth function (check linke 28)
  // getAuth is an inbuilt function imported from firebase, it will check if record is present and if not it will create one
};

//----------------------------------------------------------------sign out----------------------------------------------------------

export const signOutUser = async () => await signOut(auth);

//------------------------------------------------------onAuthStateChanged----------------------------------------------------
  // a listener which will be invoked when a user signs in/out
export const onAuthStateChangedListener = (callback) => {
  
  onAuthStateChanged(auth, callback);
}
