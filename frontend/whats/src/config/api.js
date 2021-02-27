//import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDYghYuMnOabQSx2Nhz1MAwGKyhj-Ne7ew",
    authDomain: "whats-acdbe.firebaseapp.com",
    projectId: "whats-acdbe",
    storageBucket: "whats-acdbe.appspot.com",
    messagingSenderId: "117760083877",
    appId: "1:117760083877:web:d293835fc37f1fa6f78a4c",
    measurementId: "G-1V2YKVGMF3"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
      
} 
export default firebase