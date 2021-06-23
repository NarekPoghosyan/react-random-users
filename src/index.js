// libraries 
import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';

// rootReducer
import { rootReducer } from "./redux/rootReducer";

// components
import App from './App';

// styles
import './index.scss';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
