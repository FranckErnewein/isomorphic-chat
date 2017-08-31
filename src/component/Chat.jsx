import React from 'react';
import Join from '../container/Join';
import UserList from '../container/UserList';
import MessageList from '../container/MessageList';
import Sender from '../container/Sender';

export default function Chat(props) {
  const {me} = props;
  return <div className="Chat">
    <div className="row">
      <div className="columns eight">
        <MessageList />
        {me ? <Sender /> : null}
      </div>
      <div className="columns four">
        <UserList />
        {me ? null : <Join />}
      </div>
    </div>
  </div>;
}
