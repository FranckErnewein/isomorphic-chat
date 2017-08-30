const t = require('tcomb');
const {User} = require('../struct');

const Me = t.maybe(User);

const ACTIONS = {
  JOIN: (state, payload) => payload
};


function def(state){
  return state;
}


module.exports = function messages(state = null, action) {
  const {type, payload} = action;
  const reducer = ACTIONS[type] || def;
  return Me(reducer(state, payload));
};
