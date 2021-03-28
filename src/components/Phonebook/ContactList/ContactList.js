import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { deleteContact } from '../../../api/operations-get';
import {
  selRenderFilter,
  selLoadingStatus,
} from '../../../redux/phonebook/selectors';

import ContactItem from './ContactItem';


function ContactList({ contacts, loading, disFnDeleteItem }) {
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

// selRenderFilter ---> Для правильного рендера фильтрованного и не фильтрованого списка

const mapStateToProps = state => ({
  contacts: selRenderFilter(state),
  loading: selLoadingStatus(state),
});

const mapDispatchToProps = dispatch => ({
  disFnDeleteItem: value => dispatch(deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
