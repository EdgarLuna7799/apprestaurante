import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const app = firebase.initializeApp({
    "projectId": "fb-auth-restaurante",
    "appId": "1:272147880695:web:aee3cb7b458c0d5f7e51f2",
    "storageBucket": "fb-auth-restaurante.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyBY9UnKNN49m2y_8a677rQMcN_JSOi1O6w",
    "authDomain": "fb-auth-restaurante.firebaseapp.com",
    "messagingSenderId": "272147880695"
  });