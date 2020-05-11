import store from './store';

const showNotification = (msg, type, title = null, sleepTime = 3000, callback) => {
  store.dispatch({
    type: 'APP_NOTIFIER_NOTIFICATION_SHOW',
    notification: { title, message: msg, type: type, sleepTime, callback }
  });
};

export default showNotification;
