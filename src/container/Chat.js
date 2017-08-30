import { connect } from 'react-redux';
import Chat from '../component/Chat';

export default connect(({me}) => {
  return {
    me
  };
})(Chat);
