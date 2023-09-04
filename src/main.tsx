import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/fonts/SUIT-Variable.css';
import './styles/reset.css'
import { globalStyles } from './styles/globalStyles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
);
