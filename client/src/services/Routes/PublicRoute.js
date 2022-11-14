import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, userLoggedIn, restricted, ...rest }) => (
  <Route
    {...rest}
      render={props => ( userLoggedIn && restricted ? <Redirect to="/" /> :<Component {...props} /> 
    )}
  />
);

export default PublicRoute;