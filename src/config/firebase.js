import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLpbOsUbuNKlC0WuOViPMjBRcoHI2hIwU",
  authDomain: "vezuh-7575f.firebaseapp.com",
  projectId: "vezuh-7575f",
  storageBucket: "vezuh-7575f.appspot.com",
  messagingSenderId: "202422010499",
  appId: "1:202422010499:web:b0754d6304984f9b7d51b6",
  measurementId: "G-PV1M6FCLQR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
