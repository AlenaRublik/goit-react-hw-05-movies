import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { App } from 'components/App';
import './index.css';
import { GlobalStyles } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
        <Global styles={GlobalStyles} />
        <App />
    </BrowserRouter>
  </React.StrictMode>
);