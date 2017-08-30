import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../component/Login';

class Join extends Component {
  onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = {
      name: form.elements['name'].value
    };
    this.props.dispatch({
      type: 'JOIN',
      payload
    });
    this.props.dispatch({
      type: 'NEW_USER',
      payload
    });
  }
  render() {
    return <Login onSubmit={(e) => this.onSubmit(e)} />;
  }
}

export default connect(() => {
  return {};
})(Join);
