import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { selAuthorization} from './../redux/phonebook/selectors'

export default function PrivateRoute({
  // isAuthorized,
  redirectTo,
  children,
  ...routeProps
}) {
  const isAuthorized = useSelector(selAuthorization);
  return (
    <Route {...routeProps}>
      {isAuthorized ? (children) : (<Redirect to={redirectTo} />)
  }
  </Route>
  )
}
