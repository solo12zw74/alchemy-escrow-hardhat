import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));

window.onload = function () {
  if (!window.ethereum) {
    root.render(
      <React.StrictMode>
        You need to install a browser wallet to build the escrow dapp
      </React.StrictMode>
    );
  } else {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}