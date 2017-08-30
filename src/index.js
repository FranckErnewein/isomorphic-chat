import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './component/Chat';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './skeleton.css';

const store = createStore(combineReducers(reducers));

const app = <Provider store={store}>
  <Chat />
</Provider>;

ReactDOM.render(app, document.getElementById('root'));


registerServiceWorker();
