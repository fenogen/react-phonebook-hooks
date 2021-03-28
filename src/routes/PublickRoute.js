import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { selAuthorization} from './../redux/phonebook/selectors'

const PublickRoute = ({
  component: Component,
  isAuthorized,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={ props =>
      isAuthorized && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...routeProps} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthorized: selAuthorization(state),
});

export default connect(mapStateToProps)(PublickRoute);
