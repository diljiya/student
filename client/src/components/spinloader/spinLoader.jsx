import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class SpinLoader extends React.Component {
  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <div className="lds-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      );
    }
    return null;
  }
}
SpinLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

SpinLoader.defaultProps = {
};


export default SpinLoader;
