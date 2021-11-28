// Scripts for firebase and firebase messaging
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAPmzxW3sk-Kri-J8HCpCwCBBqHkKYLIdU",
    authDomain: "halo-konsultan.firebaseapp.com",
    projectId: "halo-konsultan",
    storageBucket: "halo-konsultan.appspot.com",
    messagingSenderId: "640875123519",
    appId: "1:640875123519:web:050826f6d02ce69e34398a",
    measurementId: "G-HZEM370KV9"
});

const messaging = getMessaging();