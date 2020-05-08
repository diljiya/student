import React from 'react';
import { connect } from "react-redux";

class MainLayout extends React.Component {
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    } else {
      this.props.history.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    return null
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps
)(MainLayout);