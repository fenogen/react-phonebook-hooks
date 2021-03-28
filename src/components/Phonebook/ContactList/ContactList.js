import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { deleteContact } from '../../../api/operations-get';
import {
  selRenderFilter,
  selLoadingStatus,
} from '../../../redux/phonebook/selectors';

import ContactItem from './ContactItem';

export default function ContactList() {
  // selRenderFilter ---> Для правильного рендера фильтрованного и не фильтрованого списка
  const contacts = useSelector(selRenderFilter); 
  const loading = useSelector(selLoadingStatus);
  const dispatch = useDispatch();

  const disFnDeleteItem = (id) => {
    dispatch(deleteContact(id))
  }

  // ---> Условие что бы не было рендера при пустом массиве когда запущен филтр поиска
  if (contacts.length === 0) {
    return null;
  } else {
    // console.log('ContactList')
    return (
      <div style={{ position: 'relative' }}>
        {/* ----------------------------Loader------------------------------- */}
        {loading && (
          <Loader
            type="ThreeDots"
            color="rgba(255, 255, 255, 0.2)"
            height={75}
            width={75}
            style={{
              position: 'absolute',
              top: '-45px',
              left: '50%',
              transform: 'translate(-50%)',
            }}
          />
        )}
        {/* ----------------------------List------------------------------- */}
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
            disFnDeleteItem={disFnDeleteItem}
          ></ContactItem>
        ))}
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  fnRemove: PropTypes.func,
};