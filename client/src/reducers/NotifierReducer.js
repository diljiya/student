const defaultState = {
  notification: {
    title: null,
    message: null,
    type: null,
    sleepTime: null
  }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_NOTIFIER_NOTIFICATION_SHOW': {
      return ({ notification: action.notification });
    }
    case 'APP_NOTIFIER_NOTIFICATION_HIDE':
      return defaultState;
    default:
      return state;
  }
};

export default reducer;
