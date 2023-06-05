import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './components/App';
import './index.css';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
