import React from "react";
import Form from "./Form/Form";
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import style from "./Phonebook.module.css";
import { useSelector } from 'react-redux';

import { selAuthorization } from './../../redux/phonebook/selectors'

export default function Phonebook () {
  // console.log('Phonebook')
  const isAuthorized = useSelector(selAuthorization);
  if (isAuthorized) {
    return (
      <div className={style.list}>
        <h1 className={style.list__title}>Phonebook</h1>
        <Form />
        <Filter />
        <ContactList />
      </div>
    )
  }
}
