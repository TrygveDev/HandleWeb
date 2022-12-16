import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Desktop from './components/Desktop';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { isMobile } from 'react-device-detect';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDoCsJ7RUiZOu7vN59YmMhoeJE63YMgJfI",
  authDomain: "handlewebapp.firebaseapp.com",
  projectId: "handlewebapp",
  storageBucket: "handlewebapp.appspot.com",
  messagingSenderId: "682808408672",
  appId: "1:682808408672:web:468b39b1255b91f063e105",
  measurementId: "G-JJG3X9NJE3"
};
getAnalytics(initializeApp(firebaseConfig))


const root = ReactDOM.createRoot(document.getElementById('root'));

if (isMobile) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <Desktop />
    </React.StrictMode>
  );

}


// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
