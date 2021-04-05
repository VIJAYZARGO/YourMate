import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
        apiKey: "AIzaSyByrxefifCAHxUooHGQdWBgCrMq92v79F4",
        authDomain: "yourmatebruh.firebaseapp.com",
        projectId: "yourmatebruh",
        storageBucket: "yourmatebruh.appspot.com",
        messagingSenderId: "795121605934",
        appId: "1:795121605934:web:767ad922abcca2c25baebf"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();