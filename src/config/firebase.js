import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB2S8lEQDuJYXlZvd_FFa8chNlwHNDlKas",
  authDomain: "pharma-de0d9.firebaseapp.com",
  projectId: "pharma-de0d9",
  storageBucket: "pharma-de0d9.appspot.com",
  messagingSenderId: "689244169879",
  appId: "1:689244169879:web:67f0192d14823c07fbabd2"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;