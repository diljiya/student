import { connect } from "react-redux";

import HomeWork from './homeWork';
import { createHomeWork } from '../../actions/homeWorkActions';

const mapStateToProps = (state) => {
  return ({
    user: state.auth.user
  });
}

const mapDispatchToProps = (dispatch) => ({
  createHomeWork: (data) => createHomeWork(dispatch, data)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeWork);