// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realstate-52e35.firebaseapp.com",
  projectId: "realstate-52e35",
  storageBucket: "realstate-52e35.appspot.com",
  messagingSenderId: "216905187422",
  appId: "1:216905187422:web:3e61428b9c6a96c4b034cf"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyD8seqU_ddHfnneKvXq90M-zCLN9Meu6Gk",
//   authDomain: "realstate-52e35.firebaseapp.com",
//   projectId: "realstate-52e35",
//   storageBucket: "realstate-52e35.appspot.com",
//   messagingSenderId: "216905187422",
//   appId: "1:216905187422:web:3e61428b9c6a96c4b034cf"
// };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
