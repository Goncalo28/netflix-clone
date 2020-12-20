import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyA1yf_m6lpr-4i_eP2UlUDqTWtk3oR2l6Y",
    authDomain: "netflix-clone-1bd5d.firebaseapp.com",
    projectId: "netflix-clone-1bd5d",
    storageBucket: "netflix-clone-1bd5d.appspot.com",
    messagingSenderId: "984438733559",
    appId: "1:984438733559:web:11b3f84b23397d5462f1f2"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
