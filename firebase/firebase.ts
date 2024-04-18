// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZHMScb4HiCzJFAgF3-YiJsosYJINnTb4',
  authDomain: 'code-competive.firebaseapp.com',
  projectId: 'code-competive',
  storageBucket: 'code-competive.appspot.com',
  messagingSenderId: '859868380803',
  appId: '1:859868380803:web:cafd0a2ba74f742d8765b6',
  measurementId: 'G-VNLYMVCT3K'
}

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const analytics = getAnalytics(app)
const auth = getAuth(app)
const fireStore = getFirestore(app)

export { app, auth, fireStore }
