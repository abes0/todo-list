import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

class Database {

  firebaseConfig: object;
  account: string;
  user: string;

  constructor(){
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    this.firebaseConfig = {
      apiKey: "AIzaSyBxG8yNd1PZAQBuxuWXsAa1wrrpEqWNirk",
      authDomain: "react-app-35109.firebaseapp.com",
      databaseURL: "https://react-app-35109.firebaseio.com",
      projectId: "react-app-35109",
      storageBucket: "react-app-35109.appspot.com",
      messagingSenderId: "116228772267",
      appId: "1:116228772267:web:d8e615f60ce00ac5c882ee",
      measurementId: "G-BG1SZYRTSB"
    };
    this.account = "";
    this.user = "";
    this.init();
  }

  init(): void{
    // Initialize Firebase
    firebase.initializeApp(this.firebaseConfig);

  }

  registerAccount(email: string, password: string): void{
    firebase.database().ref().set({
      email: email,
      password: password
    })
  }

  setCurrentAccount(){
    
  }

  getData(): void{
    firebase.database().ref().once('value').then((snapshot: any) => {
      console.log(snapshot.val());
    })
  }
}

export default new Database();