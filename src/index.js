import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* the component Provider needs a props store  */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
