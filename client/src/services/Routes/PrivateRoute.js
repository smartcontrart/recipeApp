import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, userLoggedIn, ...rest }) => (
  <Route
    {...rest}
      render={props => ( userLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);

export default PrivateRoute;