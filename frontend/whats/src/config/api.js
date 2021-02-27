import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDYghYuMnOabQSx2Nhz1MAwGKyhj-Ne7ew",
    authDomain: "whats-acdbe.firebaseapp.com",
    projectId: "whats-acdbe",
    storageBucket: "whats-acdbe.appspot.com",
    messagingSenderId: "117760083877",
    appId: "1:117760083877:web:d293835fc37f1fa6f78a4c",
    measurementId: "G-1V2YKVGMF3"}


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
