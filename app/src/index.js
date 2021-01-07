import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {logger} from "react-logger"
import App from './App';
import {appReducer} from './reducers'
import thunk from "redux-thunk";

const store = createStore(appReducer,applyMiddleware(logger, thunk));


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

