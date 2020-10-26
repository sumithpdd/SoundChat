import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6ctj2AsMpPPGJsvxwYEnGkO1gv952_U4",
    authDomain: "sound-chat-e164c.firebaseapp.com",
    databaseURL: "https://sound-chat-e164c.firebaseio.com",
    projectId: "sound-chat-e164c",
    storageBucket: "sound-chat-e164c.appspot.com",
    messagingSenderId: "320607386531",
    appId: "1:320607386531:web:f181fe6866729c57fbb816",
    measurementId: "G-FH6WD3DBML"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);