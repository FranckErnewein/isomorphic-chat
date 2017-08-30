import Users from '../component/Users';
import { connect } from 'react-redux';

export default connect(({users}) => ({
  users
}))(Users);
