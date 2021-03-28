import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { selAuthorization} from './../redux/phonebook/selectors'

const PrivateRoute = ({
  component: Component,
  isAuthorized,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={ props =>
      isAuthorized ? (
        <Component {...routeProps} />
      ) : (
        <Redirect to={redirectTo} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthorized: selAuthorization(state),
});

export default connect(mapStateToProps)(PrivateRoute);
