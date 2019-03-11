import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBLhTXFU4Y4tpg4GmZosWqfXsrNjYGPKck",
  authDomain: "ninja-chat-a4a8c.firebaseapp.com",
  databaseURL: "https://ninja-chat-a4a8c.firebaseio.com",
  projectId: "ninja-chat-a4a8c",
  storageBucket: "ninja-chat-a4a8c.appspot.com",
  messagingSenderId: "197330906659"
};
const firebaseApp = firebase.initializeApp(config);

//export firestore database
export default firebaseApp.firestore();
