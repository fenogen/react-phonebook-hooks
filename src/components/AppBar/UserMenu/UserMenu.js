import React from 'react';
import { connect } from 'react-redux';
import avatar from './../../../img/avatar9.png';

import {
  selUser,
  selAuthorization,
} from './../../../redux/phonebook/selectors';

import style from './../Navigation/Navigation.module.css';

function UserMenu({ user, isAuthorized }) {
  if (isAuthorized) {
    return (
      <div className={style.flex}>
        <p className={style.flexbox__item}>Name: {user.name}</p>
        <img alt="" src={avatar} className={style.photo} />
        <p className={style.flexbox__item}>Email: {user.email}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: selUser(state),
  isAuthorized: selAuthorization(state),
});

export default connect(mapStateToProps)(UserMenu);
