import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from './../../api/operation-register';
import { selLoadingStatus } from './../../redux/phonebook/selectors';

import style from './../../components/Phonebook/Form/Form.module.css';
import './../../App.css';
import Loader from 'react-loader-spinner';


export default function RegisterPage() {
  // -----------------------------> State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(selLoadingStatus);
  const dispatch = useDispatch();


  // ----------------------------> Ф-я записи значений инпута в State

  const fnInputTargetName = event => {
    setName(event.target.value);
  };

  const fnInputTargetEmail = event => {
    setEmail(event.target.value);
  };

  const fnInputTargetPassword = event => {
    setPassword(event.target.value);
  };

  // ----------------------------> Ф-я отправки регистрации
  const fnSubmit = event => {
    //----------------------> Сбросили перезагрузку страницы
    event.preventDefault();

    const user = {};
    user.name = name;
    user.email = email;
    user.password = password;

    dispatch(registerUser(user));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <h2 className={style.form__title}>Registration</h2>
      <form className={style.newForm} autoComplete="off" onSubmit={fnSubmit}>
        <input
          className={style.newForm__name}
          required
          type="text"
          name="name"
          placeholder="Name"
          value={name} // для обнуления в инпуте
          onChange={fnInputTargetName}
        />
        <input
          className={style.newForm__name}
          required
          type="text"
          name="email"
          placeholder="Email"
          value={email} // для обнуления в инпуте
          onChange={fnInputTargetEmail}
        />
        <input
          className={style.newForm__name}
          required
          type="password"
          name="password"
          placeholder="Password"
          value={password} // для обнуления в инпуте
          onChange={fnInputTargetPassword}
        />
        <button className={style.newForm__submit} type="submit">
          Send
        </button>
      </form>
      {/* ----------------------------Loader------------------------------- */}
      <div
        style={{
          position: 'relative',
          width: '100%',
        }}
      >
        {loading && (
          <Loader
            type="ThreeDots"
            color=" #fff"
            height={75}
            width={75}
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translate(-50%)',
            }}
          />
        )}
      </div>
    </div>
  );
}

