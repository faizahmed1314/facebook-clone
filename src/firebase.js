import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLXdPWUs8cS8Rj_1iVDCU5_VWhT9RoDAE",
  authDomain: "facebook-clone-643ce.firebaseapp.com",
  databaseURL: "https://facebook-clone-643ce.firebaseio.com",
  projectId: "facebook-clone-643ce",
  storageBucket: "facebook-clone-643ce.appspot.com",
  messagingSenderId: "677347277160",
  appId: "1:677347277160:web:4e42b7a34dfe6f0da53edd",
  measurementId: "G-T6EKRK92KM",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { provider, auth };
export default db;
