import {
  createAsyncActions,
  createAction,
} from '@letapp/redux-actions';

export const logout = createAction('user/LOGOUT');
export const initUser = createAsyncActions('user/INIT_USER');
export const updateAccount = createAsyncActions(
  'user/UPDATE_ACCOUNT',
);
export const getAccount = createAsyncActions('user/GET_ACCOUNT');
export const login = createAsyncActions('user/LOGIN');
export const register = createAsyncActions('user/REGISTER');
