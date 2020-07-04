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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;