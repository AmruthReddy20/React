import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { hot } from "react-hot-loader/root";


ReactDOM.render(
  <Auth0Provider
  domain="dev-s1pcy9b1.us.auth0.com"
  clientId="lV9IobYKPZCx6tWaedkaBEw2PaUh2DK1"
  redirectUri={window.location.origin}
>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
// module.hot.accept();  
