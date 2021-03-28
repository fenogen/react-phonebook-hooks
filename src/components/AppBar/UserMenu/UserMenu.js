import React from 'react';
import { useSelector } from 'react-redux';
import avatar from './../../../img/avatar9.png';

import {
  selUser,
  selAuthorization,
} from './../../../redux/phonebook/selectors';

import style from './../Navigation/Navigation.module.css';

export default function UserMenu() {
  const user = useSelector(selUser);
  const isAuthorized = useSelector(selAuthorization);

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
