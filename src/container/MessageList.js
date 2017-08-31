import Messages from '../component/Messages';
import { connect } from 'react-redux';

export default connect(({messages}) => ({
  messages
}))(Messages);
