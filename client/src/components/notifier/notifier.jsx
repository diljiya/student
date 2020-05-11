import React from 'react';
import PropTypes from 'prop-types';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import 'react-notifications/lib/notifications.css';

class Notifier extends React.Component {
  createNotification = (notification) => {
    const {
      message,
      title,
      sleepTime,
      type,
      callback
    } = notification;
    switch (type) {
      case 'info': {
        NotificationManager.info(
          message,
          title,
          sleepTime,
          callback
        );
        break;
      }
      case 'success': {
        NotificationManager.success(
          message,
          title,
          sleepTime
        );
        break;
      }
      case 'warning': {
        NotificationManager.warning(
          message,
          title,
          sleepTime
        );
        break;
      }
      case 'error': {
        NotificationManager.error(
          message,
          title,
          sleepTime
        );
        break;
      }
      default:
    }
  };

  render() {
    const { notification } = this.props;
    return (
      <div>
        {this.createNotification(notification)}
        <NotificationContainer />
      </div>
    );
  }
}

Notifier.propTypes = {
  notification: PropTypes.shape().isRequired
};

export default Notifier;
