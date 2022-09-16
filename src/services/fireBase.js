// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { addDoc, getFirestore } from "firebase/firestore"

import stockProducts from "../components/Data/Data"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsgV-qWRmNQZFQ7m7TQTuFQnHxA3RXtjE",
  authDomain: "ecommerce---olimpea.firebaseapp.com",
  projectId: "ecommerce---olimpea",
  storageBucket: "ecommerce---olimpea.appspot.com",
  messagingSenderId: "95148386294",
  appId: "1:95148386294:web:61e2164d8b0012ffd409d7",
  measurementId: "G-NLTEVXV1L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const firestoreDB = getFirestore(app)


export async function saveProductsToFirebase () {
  const collection = collection(firestoreDB, "MakeUp")

  for (let item of stockProducts){
    const docref = await addDoc(collection, item)
    console.log(`Documento creado con id: ${docref.id}`)
  }
}
  
export default firestoreDB

