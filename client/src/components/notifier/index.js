import { connect } from 'react-redux';
import Notifier from './notifier';

function mapStateToProps(state) {
  return {
    notification: state.notifier.notification
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
