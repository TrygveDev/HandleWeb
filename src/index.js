import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Desktop from './components/Desktop';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { isMobile } from 'react-device-detect';



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
