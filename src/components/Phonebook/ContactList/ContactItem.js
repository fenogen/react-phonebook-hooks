import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

function ContactItem({ name, number, id, disFnDeleteItem }) {
  
  return (
    <ul>
      <li>
        <div className={style.item}>
          <div className={style.flex}>
            <p className={style.item__name}>{name}</p>
            <p className={style.item__priority}>{number}</p>
          </div>
          <span
            onClick={() => disFnDeleteItem(id)}
            className={style.item__remove}
          >
            X
          </span>
        </div>
      </li>
    </ul>
  );
}

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
};

export default ContactItem;
