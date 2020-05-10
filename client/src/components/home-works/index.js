import { connect } from "react-redux";

import HomeWorks from './homeWorks';
import { fetchHomeWorks } from '../../actions/homeWorkActions';

const mapStateToProps = (state) => {
  return ({
    homeworks: state.homeworks.homeworks,
    loading: state.homeworks.loading
  });
}

const mapDispatchToProps = (dispatch) => ({
  fetchHomeWorks: () => fetchHomeWorks(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeWorks);