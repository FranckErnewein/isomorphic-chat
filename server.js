const {Server} = require('ws');
const {createStore, combineReducers} = require('redux');

const users = require('./src/reducers/users');
const messages = require('./src/reducers/messages');

const reducers = {
  users,
  messages
};

const store = createStore(combineReducers(reducers));

const server = new Server({
  port: 8080
});

server.on('connection', (socket) => {

  var me;

  const state = store.getState();
  socket.send(JSON.stringify({
    type: 'INIT_USERS',
    payload: state.users
  }));
  socket.send(JSON.stringify({
    type: 'INIT_MESSAGES',
    payload: state.messages
  }));

  socket.on('message', (message) => {
    const action = JSON.parse(message);
    store.dispatch(action);
    if (action.type === 'JOIN') {
      me = action.payload;
      socket.send(message);
    }else{
      server.clients.forEach(client => client.send(message));
    }
  });

  socket.on('close', () => {
    server.clients.forEach(client => client.send(JSON.stringify({
      type: 'USER_DISCONNECTED',
      payload: me
    })));
  });
});
