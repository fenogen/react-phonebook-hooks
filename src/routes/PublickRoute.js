import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { selAuthorization } from './../redux/phonebook/selectors';

export default function PublickRoute({
  // isAuthorized,
  redirectTo,
  children,
  ...routeProps
}) {
  const isAuthorized = useSelector(selAuthorization);
  return (
    <Route {...routeProps}>
      {isAuthorized && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
