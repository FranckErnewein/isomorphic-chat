import React from 'react';

export default function Messages(props){
  const items = props.messages.map(({user, date, text}) => {
    return <li key={`${date}-${text}`}>
      {user.name}: {text}
    </li>;
  });
  return <ul className="Messages">{items}</ul>;
}
