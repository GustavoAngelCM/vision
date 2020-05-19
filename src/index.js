import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import SignIn from './layouts/signedout/SignIn';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SignIn/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();