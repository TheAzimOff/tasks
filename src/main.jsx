import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyALtr9ZkvOi2WsBh9KSC7fZaHRV-oICofw',
  authDomain: 'todo-cloudy-d9ec6.firebaseapp.com',
  projectId: 'todo-cloudy-d9ec6',
  storageBucket: 'todo-cloudy-d9ec6.appspot.com',
  messagingSenderId: '916960805509',
  appId: '1:916960805509:web:c0b8efc4777462e6e6dfec',
});

export const Context = createContext(null);
const firestore = getFirestore(app);
const auth = getAuth(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider value={{ firestore, auth }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
