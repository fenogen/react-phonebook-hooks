import React from 'react';
import { Link } from 'react-router-dom';

import route from './../../routes/routes';

import './../../App.css';
import style from './../../components/Phonebook/Phonebook.module.css';

export default function HomePage() {
  return (
    <div className={style.list}>
      <h1 className={style.list__title}>Phonebook</h1>
      <form
        className={style.newForm}
        autoComplete="off"
      >
        <input
          className={style.newForm__name}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className={style.newForm__name}
          type="number"
          name="number"
          placeholder="Number"
        />
        <Link to={route.login} className={style.newForm__submit}>
          Add contact
        </Link>
      </form>
    </div>
  );
}
