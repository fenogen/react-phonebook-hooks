import React from 'react';
import { useDispatch} from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

import { searchContact } from '../../../api/operations-get';
// import { selFilterValue } from '../../../redux/phonebook/selectors';

import style from '../Form/Form.module.css';

// const mapStateToProps = state => ({
//   filterValue: selFilterValue(state),
// });

export default function Filter() {
  const dispatch = useDispatch();


  const fnFilterTarget = event => {
    const input = event.target;
    const value = input.value;
    dispatch(searchContact(value));
  };
  // console.log('Filter')

  return (
    <div className={style.newForm}>
      <h2 className={style.filter__title}>Contacts</h2>
      <DebounceInput
        minLength={1}
        debounceTimeout={300}
        type="text"
        name="title"
        autoComplete="off"
        placeholder="Find contacts by name"
        className={style.newForm__name}
        onChange={fnFilterTarget}
      />
      {/* <input
        className={style.newForm__name}
        type="text"
        name="title"
        placeholder="Find contacts by name"
        value={filterValue}
        onChange={fnFilterTarget}
      /> */}
    </div>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
  fnFilterTarget: PropTypes.func,
};
