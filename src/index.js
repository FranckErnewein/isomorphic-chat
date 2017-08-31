import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import Chat from './container/Chat';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './skeleton.css';

const ws = new window.WebSocket('ws://localhost:8080/');
const wsMiddleware = () => (next) => (action) => {
  const {type} = action;
  if (['NEW_MESSAGE', 'NEW_USER', 'JOIN', 'USER_DISCONNECTED'].indexOf(type) < 0 || action.__wsIncome) {
    delete action.__wsIncome;
    return next(action);
  } else {
    ws.send(JSON.stringify(action));
  }
};

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(wsMiddleware)));

const app = <Provider store={store}>
  <Chat />
</Provider>;

ReactDOM.render(app, document.getElementById('root'));

ws.onmessage = (event) => {
  const action = JSON.parse(event.data);
  action.__wsIncome = true;
  store.dispatch(action);
};

registerServiceWorker();
