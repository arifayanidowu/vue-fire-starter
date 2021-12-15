import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4zH8S7KamBAiCJIotHwa6BeFM9nIAaAs",
  authDomain: "vue-fire-c454a.firebaseapp.com",
  projectId: "vue-fire-c454a",
  storageBucket: "vue-fire-c454a.appspot.com",
  messagingSenderId: "194662544540",
  appId: "1:194662544540:web:5d1c67faa3c64a6d662959",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
