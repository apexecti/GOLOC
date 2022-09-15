import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcnOvbIOBYp_T5XI4C3Xf4-RO74rQYFI0",
  authDomain: "goloc-12bec.firebaseapp.com",
  databaseURL:
    "https://goloc-12bec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "goloc-12bec",
  storageBucket: "goloc-12bec.appspot.com",
  messagingSenderId: "687903372848",
  appId: "1:687903372848:web:fd464c64c98984725d1ff5",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
