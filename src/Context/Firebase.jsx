import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider , signInWithPopup} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxG__Vie5EZY8mAv2XzpdcEL0-D77ixco",
  authDomain: "front-end-projects-c9976.firebaseapp.com",
  projectId: "front-end-projects-c9976",
  storageBucket: "front-end-projects-c9976.firebasestorage.app",
  messagingSenderId: "609070841599",
  appId: "1:609070841599:web:6641331440912c604e16ca",
  databaseURL: "https://front-end-projects-c9976-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);

// Create Firebase Context
const FirebaseContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider()

// Custom hook to use Firebase context
export const useFirebase = () =>  useContext(FirebaseContext);
  

// Firebase Provider Component
export const FirebaseProvider = (props) => {
  // Function to store data in the database
 // const putData = (key, data) => set(ref(database, key), data);
 const putData = async (key, data) => {
  try {
    await set(ref(database, key), data);
    console.log("Data written successfully");
  } catch (error) {
    console.error("Error writing data: ", error);
  }
};
  const auth = getAuth();
  // Function to sign up a user with email and password
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In Successful:", result.user);
      return result.user; // Return the user object if needed
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      throw error; // Re-throw the error for further handling
    }
  };

  // Value to be provided by the context
  const value = {
    signupUserWithEmailAndPassword,
    putData,
    signInWithGoogle,
 
  };


  return (
    <FirebaseContext.Provider value={value}>
      {props.children}
    </FirebaseContext.Provider>
  );
};