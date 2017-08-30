import React from 'react';

export default function Login(props){
  const {onSubmit} = props;
  return <form onSubmit={onSubmit}>
    <div className="container">
      <p>
        <input type="text" name="name" /> &nbsp;
        <input className="button button-primary" type="submit" value="join!" />
      </p>
    </div>
  </form>;
}
