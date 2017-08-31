/* global expect */
const reducer = require('./users');

describe('users reducer', () => {

  it('should init with an empty hash', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should init with existing hash', () => {
    expect(reducer(undefined, {
      type: 'INIT_USERS',
      payload: {
        'Franck': {
          name: 'Franck'
        },
        'Max': {
          name: 'Max'
        }
      }
    }).Franck.name).toEqual('Franck');
  });

  it('should add franck', () => {
    expect(reducer({}, {
      type: 'NEW_USER',
      payload: {
        name: 'Franck'
      }
    }, {})).toEqual({
      Franck: {
        name: 'Franck'
      }
    });
  });

  it('should add franck', () => {
    expect(reducer({
      Franck: {
        name: 'Franck'
      }
    }, {
      type: 'NEW_USER',
      payload: {
        name: 'Franck'
      }
    }, {})).toEqual({
      Franck: {
        name: 'Franck'
      }
    });
  });

  it('should remove user', () => {
    expect(reducer({
      Franck: {
        name: 'Franck'
      },
      Arnold: {
        name: 'Arnold'
      }
    }, {
      type: 'USER_DISCONNECTED',
      payload: {
        name: 'Franck'
      }
    }, {})).toEqual({
      Arnold: {
        name: 'Arnold'
      }
    });
  });


});
