import React from 'react';
import Join from '../container/Join';

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
          User
        </div>
      </div>
    </div>;
  }
}
