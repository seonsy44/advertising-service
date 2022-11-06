import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { colors } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import { HttpClient } from './http/httpClient';
import { TrendService } from './service/TrendService';
import { TrendProvider } from './context/TrendContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const httpClient = new HttpClient('/data');
const trendService = new TrendService(httpClient);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={colors}>
      <TrendProvider trendService={trendService}>
        <App />
      </TrendProvider>
    </ThemeProvider>
  </React.StrictMode>
);
