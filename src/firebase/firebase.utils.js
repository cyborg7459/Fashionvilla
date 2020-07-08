import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBrxrZ1Sx69CGy8PnsXGni3MA5XLupG15M",
    authDomain: "fashionvilla-19183.firebaseapp.com",
    databaseURL: "https://fashionvilla-19183.firebaseio.com",
    projectId: "fashionvilla-19183",
    storageBucket: "fashionvilla-19183.appspot.com",
    messagingSenderId: "98515080310",
    appId: "1:98515080310:web:043b87b141192125f6bb57",
    measurementId: "G-32C8Y8EM9H"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
