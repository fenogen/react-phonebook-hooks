import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addContact } from '../../../api/operations-get';
import { getAllContacts} from '../../../api/operation-register';
import { selContacts, selAuthorization } from '../../../redux/phonebook/selectors';

import style from './Form.module.css';

function Form({contacts, disFnSubmit}) {

  // -----------------------------> State
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')


  // ----------------------------> Ф-я записи значений инпута в State

  const fnInputTargetName = event => {
    setName(event.target.value);
  };

  const fnInputTargetNumber = event => {
    setNumber(event.target.value);
  };

  // const fnInputTarget = event => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       console.log(`Тип поля - ${name} - не обрабатывается`)
  //   }
  // }

  // -------------------------> Ф-я отправки одного контакта:
 const fnSubmit = event => {
    //---> Сбросили перезагрузку страницы
    event.preventDefault();
    //---> Добавляем контакт по условию:
   const arrayOfContacts = contacts;
   const arrayOfNames = arrayOfContacts.map(item => item.name.toLowerCase());
   const contact = {};
   contact.name = name;
   contact.number = number;

   if (!arrayOfNames.includes(name.toLowerCase())) {
      disFnSubmit(contact)
      //---> сбросили значение в Инпуте
     setName('');
     setNumber('')
    }

    else {
      alert(`Имя ${name} уже есть в контактах`);
    }
  };

    // console.log('Form')
    return (
      <form className={style.newForm} autoComplete="off"
        onSubmit={fnSubmit}
      >
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
          type="number"
          name="number"
          placeholder="Number"
          value={number} // для обнуления в инпуте
          onChange={fnInputTargetNumber}
        />
        <button className={style.newForm__submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }

const mapStateToProps = state => ({
  contacts: selContacts(state),
  isAuthorized: selAuthorization(state),
});

const mapDispatchToProps = dispatch => ({
  disFnSubmit: value => dispatch(addContact(value)),
  disGetAllContacts: () => dispatch(getAllContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);