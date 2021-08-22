import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCex1kMDC2TOrCtIY1fhecMjLHcqFEkX54",
  authDomain: "todo-88a43.firebaseapp.com",
  projectId: "todo-88a43",
  storageBucket: "todo-88a43.appspot.com",
  messagingSenderId: "378490724761",
  appId: "1:378490724761:web:70ff40644eea5760c7b308",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
