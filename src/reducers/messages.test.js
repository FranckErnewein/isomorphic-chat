/* global expect */
const reducer = require('./messages');

function createMessage(text){
  return {
    text,
    user: {
      name: 'Franck'
    },
    date: 1234
  };
}

describe('messages reducer', () => {

  it('should init with an empty array', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should init with an existing stack', () => {
    expect(reducer(undefined, {
      type: 'INIT_MESSAGES',
      payload: [createMessage('yo'), createMessage('yolo')]
    })[1].text).toEqual('yolo');
  });

  it('should add one message', () => {
    expect(reducer([
      createMessage('hello')
    ], {
      type: 'NEW_MESSAGE',
      payload:createMessage('hi')
    })[1].text).toEqual('hi');
  });

  it('should add one message', () => {
    const state = new Array(100).fill().map((_, i) => createMessage('m' + i));
    const newState = reducer(state, {
      type: 'NEW_MESSAGE',
      payload:createMessage('hi')
    });
    expect(newState.length).toEqual(100);
    expect(newState[99].text).toEqual('hi');
  });

});
