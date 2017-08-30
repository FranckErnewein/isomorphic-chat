/* global expect */
const reducer = require('./me');

describe('me', () => {

  it('should init null', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should join', () => {
    expect(reducer(undefined, {
      type: 'JOIN',
      payload: {
        name: 'Franck'
      }
    })).toEqual({
      name: 'Franck'
    });
  });
});
