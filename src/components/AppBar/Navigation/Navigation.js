import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import route from '../../../routes/routes';

import { selAuthorization } from '../../../redux/phonebook/selectors';
import { logout } from './../../../api/operation-register'

import UserMenu from '../UserMenu/UserMenu';

import style from './Navigation.module.css';

function Navigation({ isAuthorized, disLogout}) {
  return (
    <nav className={style.flexbox}>
      <NavLink
        exact
        to={route.home}
        // className={style.navLink}
        className={style.newForm__submit}
        activeClassName={style.navLink__active}
      >
        Home
      </NavLink>
      {!isAuthorized && (
        <div className={style.flexbox}>
          <NavLink
            to={route.register}
            // className={style.navLink}
            className={style.newForm__submit}
            activeClassName={style.navLink__active}
          >
            Registration
          </NavLink>
          <NavLink
            to={route.login}
            // className={style.navLink}
            className={style.newForm__submit}
            activeClassName={style.navLink__active}
          >
            Login
          </NavLink>
        </div>
      )}
      {isAuthorized && (
        <div className={style.flexbox}>
          <UserMenu/>
          <NavLink
            to={route.home}
            // className={style.navLink}
            className={style.newForm__submit}
            activeClassName={style.navLink__active}
            onClick={() => disLogout()}
          >
            Logout
          </NavLink>
        </div>
      )}
    </nav>
  );
}

const mapStateToProps = state => ({
  isAuthorized: selAuthorization(state),
});

const mapDispatchToProps = dispatch => ({
  disLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
