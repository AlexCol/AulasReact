import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIXQqGKrz5fzGhYYaOSn-IBMO96NfxQgA",
  authDomain: "miniblog-alex.firebaseapp.com",
  projectId: "miniblog-alex",
  storageBucket: "miniblog-alex.appspot.com",
  messagingSenderId: "1066270810316",
  appId: "1:1066270810316:web:b290a803e5371b954da269"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };