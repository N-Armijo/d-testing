import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDTlLhYrn9LeuQcs0a9YLmHOwjxLuTT0wI",
  authDomain: "d-firebase-testing-46d5e.firebaseapp.com",
  projectId: "d-firebase-testing-46d5e",
  storageBucket: "d-firebase-testing-46d5e.firebasestorage.app",
  messagingSenderId: "696771243170",
  appId: "1:696771243170:web:7087bdc82a28647be37bfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export { app }
