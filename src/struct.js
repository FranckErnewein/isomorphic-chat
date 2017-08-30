const t = require('tcomb');

const User = t.struct({
  name: t.String
});

const Message = t.struct({
  text: t.String,
  user: User,
  date: t.Number
});

const Messages = t.list(Message);

module.exports = {
  User,
  Message,
  Messages
};
