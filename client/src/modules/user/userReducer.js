import { handleActions } from '@letapp/redux-actions';
import * as actions from './userActions';

const initialState = {
  user: null,
  isUserFetched: false,
};

export const userReducer = handleActions(
  {
    [actions.updateAccount.success]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    [actions.initUser.success]: (state, action) => ({
      ...state,
      isUserFetched: true,
      user: action.payload,
    }),
    [actions.initUser.error]: (state, action) => ({
      ...state,
      isUserFetched: true,
      user: null,
    }),
    [actions.logout]: (state) => ({
      ...state,
      user: null,
    }),
    [actions.register.success]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    [actions.login.success]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    [actions.getAccount.success]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    [actions.getAccount.error]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);

export default userReducer;
