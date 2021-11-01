// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";

import "firebase//compat/storage";

import "firebase//compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,

    authDomain: process.env.REACT_APP_AUTH_DOMAIN,

    projectId: process.env.REACT_APP_PROJECTID,

    storageBucket: process.env.REACT_APP_STORAGEID,

    messagingSenderId: process.env.REACT_APP_MESSAGEID,

    appId: process.env.REACT_APP_APPID,

    measurementId: process.env.REACT_APP_MESSAGEID

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp}