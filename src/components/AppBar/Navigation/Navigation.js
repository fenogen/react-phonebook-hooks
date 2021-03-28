import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import route from '../../../routes/routes';

import { selAuthorization } from '../../../redux/phonebook/selectors';
import { logout } from './../../../api/operation-register'

import UserMenu from '../UserMenu/UserMenu';

import style from './Navigation.module.css';


export default function Navigation() {
  const isAuthorized = useSelector(selAuthorization);
  const dispatch = useDispatch();
  
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
            onClick={() => dispatch(logout())}
          >
            Logout
          </NavLink>
        </div>
      )}
    </nav>
  );
}

