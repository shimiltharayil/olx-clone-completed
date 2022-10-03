import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDQj9hPU7PSKwAtcn0ebjw3gyPJ-3KBs3I",
    authDomain: "olx-clone-d0b26.firebaseapp.com",
    projectId: "olx-clone-d0b26",
    storageBucket: "olx-clone-d0b26.appspot.com",
    messagingSenderId: "915721874062",
    appId: "1:915721874062:web:504f63b467caa2d928b7df"

};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp;