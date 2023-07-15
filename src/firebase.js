import {firebase} from "firebase/app"
import  "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC3uGLwPNU1qNjJEvPuKBcSwZB4owbvJuQ",
    authDomain: "auth-system-stream-f1e28.firebaseapp.com",
    projectId: "auth-system-stream-f1e28",
    storageBucket: "auth-system-stream-f1e28.appspot.com",
    messagingSenderId: "712539312544",
    appId: "1:712539312544:web:1ddae1a0c389af46c194c5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const githubProvider = new firebase.auth.GithubAuthProvider();

  export {auth,googleProvider,fbProvider,githubProvider}