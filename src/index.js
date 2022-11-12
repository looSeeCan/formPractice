import React from 'react';
import ReactDOM from 'react-dom';
import "./CSS/index.css";
import "./CSS/style.css";
import App from './App';
import{Auth0Provider} from "@auth0/auth0-react";

/// grab our environmental variables. for userLoginAuth
const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  // <React.StrictMode> 
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')

  /// above is the original code
  /// this Auth0Provider is for userLogInAuth. because this auth provider uses react context we will be able to access all its
  /// properties with in our app
  /// passing our current location our current url in our browser, then redirect us back to this url when login is complete
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <App />
  
  </Auth0Provider>,
  document.getElementById("root")
);
