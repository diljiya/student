import { connect } from "react-redux";

import HomeWork from './homeWork';
import { createHomeWork, updateHomeWork } from '../../actions/homeWorkActions';

const mapStateToProps = (state) => {
  return ({
    user: state.auth.user,
    loading: state.homeworks.homeworkLoading
  });
}

const mapDispatchToProps = (dispatch) => ({
  createHomeWork: (data, history) => createHomeWork(dispatch, data, history),
  updateHomeWork: (data, history) => updateHomeWork(dispatch, data, history)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeWork);