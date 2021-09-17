import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA1eXDcsBzL5rzNdz7iBQoGaX9owK8Uhv4",
  authDomain: "followapp-74a29.firebaseapp.com",
  projectId: "followapp-74a29",
  storageBucket: "followapp-74a29.appspot.com",
  messagingSenderId: "819257854225",
  appId: "1:819257854225:web:f56de1a6b69f51d3e4a4b0",
  measurementId: "G-PRJDM5639N",
};
firebase.initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase;
