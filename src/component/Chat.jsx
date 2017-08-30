import React from 'react';
import Join from '../container/Join';
import UserList from '../container/UserList';
import Sender from '../container/Sender';

export default function Chat(props){
  const {me} = props;
  if(!me){
    return <Join />;
  }else{
    return <div className="Chat">
      <div className="row">
        <div className="columns eight">
          Messages
        </div>
        <div className="columns four">
          <UserList />
        </div>
      </div>
      <Sender />
    </div>;
  }
}
