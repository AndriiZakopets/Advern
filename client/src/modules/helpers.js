import addNotification from '../Notification';

export const asyncOperationFactory = (apiFunc, action, cb, errCb) => (
  ...args
) => async (dispatch) => {
  try {
    dispatch(action.start());

    const data = await apiFunc(...args);

    dispatch(action.success(data));
    if (typeof cb === 'function') cb(dispatch);
  } catch (error) {
    addNotification(
      'danger',
      error?.response?.data?.error ?? error.message,
    );
    dispatch(
      action.error(error?.response?.data?.error ?? error.message),
    );
    if (typeof errCb === 'function') errCb(dispatch);
  }
};
