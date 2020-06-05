import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhYjjcERZ8Y0uAXnYMWCK92JtvEVSQHVQ",
  authDomain: "projeto-822-anon.firebaseapp.com",
  databaseURL: "https://projeto-822-anon.firebaseio.com",
  projectId: "projeto-822-anon",
  storageBucket: "projeto-822-anon.appspot.com",
  messagingSenderId: "496509817261",
  appId: "1:496509817261:web:977ef8b669c1288cb49124"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();