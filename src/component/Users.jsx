import React from 'react';

export default function Users(props){
  const {users} = props;
  const items = Object.keys(users).map(name => {
    return <li key={name}>{name}</li>;
  });
  return <ul className="Users">{items}</ul>;
}
