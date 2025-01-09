import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Provider } from 'react-redux';
import App from './App.tsx';
import store from './redux/store.ts';
import './index.css';


const rootElement = document.getElementById('root') as HTMLElement;


const root = ReactDOM.createRoot(rootElement);


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
