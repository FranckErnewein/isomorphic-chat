import React from 'react';

export default function MessageSender(props){
  const {onSubmit} = props;
  return <form className="MessageSender" onSubmit={onSubmit}>
    <p>
      <input type="text" name="text" />
      <input className="button button-primary" type="submit" value="send" />
    </p>
  </form>;
}
