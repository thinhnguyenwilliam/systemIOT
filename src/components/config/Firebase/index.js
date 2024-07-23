import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyByhS4YXKX6GQ6O03_IzvHHykuD4McTQq4",
  authDomain: "fir-lora-ae85b.firebaseapp.com",
  databaseURL: "https://fir-lora-ae85b-default-rtdb.firebaseio.com",
  projectId: "fir-lora-ae85b",
  storageBucket: "fir-lora-ae85b.appspot.com",
  messagingSenderId: "821171718717",
  appId: "1:821171718717:web:fdd0fd1b80fc2529403854",
  measurementId: "G-1D1M5ZRCFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
export default app;
