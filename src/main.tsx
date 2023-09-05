import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/fonts/SUIT-Variable.css';
import './styles/reset.css'
import { globalStyles } from './styles/globalStyles.ts';
import { colors } from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
