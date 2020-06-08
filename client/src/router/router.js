import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import routes from './routes';
import AddProduct from '../scenes/AddProduct/AddProduct';
import Auth from '../scenes/Auth/Auth';
import Products from '../scenes/Products/Products';
import Product from '../scenes/Product/Product';
import Header from '../scenes/Header/Header';
import EditAccount from '../scenes/EditAccount/EditAccount';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={routes.product} component={Product} />
        <Route exact path={routes.products} component={Products} />
        <Route
          exact
          path={routes.editAccount}
          component={EditAccount}
        />
        <Route
          exact
          path={routes.addProduct}
          component={AddProduct}
        />
        <Route exact path={routes.auth} component={Auth} />
        <Route>
          <Redirect to={routes.products}></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
