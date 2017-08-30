const {Users, User} = require('../struct');

const ACTIONS = {
  INIT_USERS: (state, payload) => payload,
  NEW_USER: (state, payload) => {
    return Object.assign({}, state, {
      [payload.name]: User(payload)
    });
  }

};

function def(state){
  return state;
}


module.exports = function messages(state = {}, action) {
  const {type, payload} = action;
  const reducer = ACTIONS[type] || def;
  return Users(reducer(state, payload));
};
