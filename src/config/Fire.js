// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const Config = {
    apiKey: //your firbase config
  };

  const fire = firebase.initializeApp(Config)
  export default fire
