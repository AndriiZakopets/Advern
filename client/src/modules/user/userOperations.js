import * as actions from './userActions';
import * as Auth from '../../Api/Auth';
import * as Account from '../../Api/Account';
import { asyncOperationFactory } from '../helpers';
import addNotification from '../../Notification';

export const login = asyncOperationFactory(Auth.login, actions.login);

export const register = asyncOperationFactory(
  Auth.register,
  actions.register,
);

// export const getAccount = asyncOperationFactory(
//   Account.getAccount,
//   actions.getAccount,
// );

export const updateAccount = asyncOperationFactory(
  Account.updateAccount,
  actions.updateAccount,
  () => {
    addNotification('success', 'Account successfully updated');
  },
);

export const init = asyncOperationFactory(
  Auth.init,
  actions.initUser,
  null,
  (dispatch) => {
    dispatch(logout());
  },
);

export const logout = () => async (dispatch) => {
  Auth.logout();
  dispatch(actions.logout());
};

// export const init = () => async (dispatch) => {
//   const user = {
//     email: 'zakihor3@gmail.com',
//     fullName: 'Snailz',
//     location: '',
//     phone: '',
//   };
//   // const user = null;

//   dispatch(actions.initUser.success(user));
// };

export { actions };
