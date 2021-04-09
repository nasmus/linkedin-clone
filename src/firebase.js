import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAi-UKuBEOYmP3dFc-rmQ2zbXM55pwY-tI",
    authDomain: "linkedin-clone-fb7e6.firebaseapp.com",
    projectId: "linkedin-clone-fb7e6",
    storageBucket: "linkedin-clone-fb7e6.appspot.com",
    messagingSenderId: "1094740631258",
    appId: "1:1094740631258:web:89fa4dec5785fe78458fe3",
    measurementId: "G-F8R0QVMS9B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth }