import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userOperations } from './modules/user';
import Router from './router/router';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const isUserFetched = useSelector(
    (state) => state.user.isUserFetched,
  );

  useEffect(() => {
    dispatch(userOperations.init());
  }, [dispatch]);

  if (isUserFetched) {
    return <Router />;
  }
  return <div>LOADING...</div>;
}

export default App;
