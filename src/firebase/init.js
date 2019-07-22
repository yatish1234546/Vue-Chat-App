import firebase from 'firebase';
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyBp0Z7Nqjo6IHdVfPGPyUClXaZgIcf2OZY",
    authDomain: "chat-app-f4b74.firebaseapp.com",
    databaseURL: "https://chat-app-f4b74.firebaseio.com",
    projectId: "chat-app-f4b74",
    storageBucket: "chat-app-f4b74.appspot.com",
    messagingSenderId: "464057488272",
    appId: "1:464057488272:web:6746341c965a0d67"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()