import React from "react";
import Form from "./Form/Form";
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import style from "./Phonebook.module.css";
import { connect } from "react-redux";

import { selAuthorization } from './../../redux/phonebook/selectors'

const Phonebook = ({ isAuthorized }) => {
  // console.log('Phonebook')
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

const mapStateToProps = state => ({
  isAuthorized: selAuthorization(state),
});


export default connect(mapStateToProps )(Phonebook);