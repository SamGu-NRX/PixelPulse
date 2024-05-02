import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // User is signed up
  })
  .catch((error) => {
    // An error occurred
  });


firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // User is signed in
  })
  .catch((error) => {
    // An error occurred
  });

firebase.auth().signOut()
  .then(() => {
    // User is signed out
  })
  .catch((error) => {
    // An error occurred
  });


const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            setUser(user);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    return { user, isLoading };
}
