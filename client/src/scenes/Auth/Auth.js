import React from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../modules/user';
import { Redirect, Switch, Route } from 'react-router-dom';
import routes from '../../router/routes';
import Login from '../../Components/AuthForm/LoginForm/LoginForm';
import Register from '../../Components/AuthForm/RegisterForm/RegisterForm';

const AuthContainer = () => {
  const user = useSelector(userSelectors.getUser);

  return (
    <Switch>
      {user && <Redirect to={routes.home} />}
      <Route exact path={routes.login} component={Login} />
      <Route exact path={routes.register} component={Register} />
    </Switch>
  );
};

export default AuthContainer;
