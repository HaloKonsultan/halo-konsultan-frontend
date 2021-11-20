// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyAPmzxW3sk-Kri-J8HCpCwCBBqHkKYLIdU",
    authDomain: "halo-konsultan.firebaseapp.com",
    projectId: "halo-konsultan",
    storageBucket: "halo-konsultan.appspot.com",
    messagingSenderId: "640875123519",
    appId: "1:640875123519:web:050826f6d02ce69e34398a",
    measurementId: "G-HZEM370KV9"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png",
    };

    // eslint-disable-next-line no-restricted-globals
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});