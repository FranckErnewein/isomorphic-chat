import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageSender from '../component/MessageSender';

class Sender extends Component {
  onSubmit(e) {
    e.preventDefault();
    const {me} = this.props;
    const form = e.currentTarget;
    const input = form.elements['text'];
    const payload = {
      text: input.value,
      date: Date.now(),
      user: me
    };
    this.props.dispatch({
      type: 'NEW_MESSAGE',
      payload
    });
    input.value = '';
  }
  render() {
    return <MessageSender onSubmit={(e) => this.onSubmit(e)} />;
  }
}

export default connect(({me}) => ({
  me
}))(Sender);
