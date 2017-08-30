const ACTIONS = {
  INIT_MESSAGES: (state, payload) => payload,
  NEW_MESSAGE: (state, payload) => {
    let toKeep = state.length > 99 ? state.slice(1, 100) : state;
    return [...toKeep, payload];
  }

};


function def(state){
  return state;
}


module.exports = function messages(state = [], action) {
  const {type, payload} = action;
  const reducer = ACTIONS[type] || def;
  return reducer(state, payload);
};
