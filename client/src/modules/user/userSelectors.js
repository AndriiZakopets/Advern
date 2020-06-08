import { createSelector } from 'reselect';

const userSelector = (state) => state.user.user;

export const getUser = createSelector(userSelector, (state) => state);
