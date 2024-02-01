import { SparkProvider } from '@stacklearner/spark-ui';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const theme = {
  colors: {
    primary: {
      main: '#1976d2',
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SparkProvider theme={theme}>
      <App />
    </SparkProvider>
  </React.StrictMode>,
);