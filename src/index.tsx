import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { colors } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={colors}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
