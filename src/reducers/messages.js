const {Message, Messages} = require('../struct');
const limit = 100;

const ACTIONS = {
  INIT_MESSAGES: (state, payload) => payload,
  NEW_MESSAGE: (state, payload) => {
    let toKeep = state.length > limit - 1 ? state.slice(1, limit) : state;
    return [...toKeep, Message(payload)];
  }

};


function def(state){
  return state;
}


module.exports = function messages(state = [], action) {
  const {type, payload} = action;
  const reducer = ACTIONS[type] || def;
  return Messages(reducer(state, payload));
};
