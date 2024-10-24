import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css'; // Import your Bootstrap theme here
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
