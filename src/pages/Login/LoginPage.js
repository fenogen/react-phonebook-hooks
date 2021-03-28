import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { loginUser } from './../../api/operation-register';
import { selLoadingStatus } from './../../redux/phonebook/selectors';

import style from './../../components/Phonebook/Form/Form.module.css';
import './../../App.css';

function LoginPage({ loading, disFnLogin }) {
  // -----------------------------> State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ----------------------------> Ф-я записи значений инпута в State
  const fnInputTargetEmail = event => {
    setEmail(event.target.value);
  };

  const fnInputTargetPassword = event => {
    setPassword(event.target.value);
  };

  // ----------------------------> Ф-я отправки данных
  const fnSubmit = event => {
    //----------------------> Сбросили перезагрузку страницы
    event.preventDefault();
    const user = {};
    user.email = email;
    user.password = password;

    disFnLogin(user);
    setEmail('');
    setPassword(''); //---> сбросили значение в Инпуте
  };

  return (
    <div className="container">
      <h2 className={style.form__title}>Login</h2>
      <form className={style.newForm} autoComplete="off" onSubmit={fnSubmit}>
        <input
          className={style.newForm__name}
          required
          type="email"
          name="email"
          placeholder="Please enter email"
          value={email} // для обнуления в инпуте
          onChange={fnInputTargetEmail}
        />
        <input
          className={style.newForm__name}
          required
          type="password"
          name="password"
          placeholder="Please enter password"
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

const mapStateToProps = state => ({
  loading: selLoadingStatus(state),
});

const mapDispatchToProps = dispatch => ({
  disFnLogin: value => dispatch(loginUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
