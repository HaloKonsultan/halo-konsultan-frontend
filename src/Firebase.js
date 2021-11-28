import firebase from "firebase/compat";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPmzxW3sk-Kri-J8HCpCwCBBqHkKYLIdU",
    authDomain: "halo-konsultan.firebaseapp.com",
    projectId: "halo-konsultan",
    storageBucket: "halo-konsultan.appspot.com",
    messagingSenderId: "640875123519",
    appId: "1:640875123519:web:050826f6d02ce69e34398a",
    measurementId: "G-HZEM370KV9"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
    let currentToken = "";

    try {
        currentToken = await messaging.getToken({ vapidKey: publicKey });
        if (currentToken) {
            setTokenFound(true);
        } else {
            setTokenFound(false);
        }
    } catch (error) {
        console.log("An error occurred while retrieving token. ", error);
    }

    return currentToken;
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
            console.log("panggil message")
        });
    });