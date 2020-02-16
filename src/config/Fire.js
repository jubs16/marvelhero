// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const Config = {
    apiKey: "AIzaSyAO2cz1VAL4MEcgz1YCufBznJ6E3EJTbOc",
    authDomain: "login-marvelhero.firebaseapp.com",
    databaseURL: "https://login-marvelhero.firebaseio.com",
    projectId: "login-marvelhero",
    storageBucket: "login-marvelhero.appspot.com",
    messagingSenderId: "232490016458",
    appId: "1:232490016458:web:e8e739bb54949783685e33",
    measurementId: "G-0HH9N20HKB"
  };

  const fire = firebase.initializeApp(Config)
  export default fire