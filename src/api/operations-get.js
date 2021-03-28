import axios from 'axios';
import {
  actAddItem,
  actAddItemError,
  actAddItemRequest,
  actDeleteItem,
  actDeleteItemError,
  actDeleteItemRequest,
  actFilterList,
  actFilterListError,
  actFilterListRequest,
} from '../redux/phonebook/actions';

// --------------------------------------------------> Настройки axios

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';


// ----------------------------------------------> Add Contact

const addContact = contact => dispatch => {
  dispatch(actAddItemRequest());
  axios
    .post('/contacts', contact)
    .then(responce => dispatch(actAddItem(responce.data)))
    .catch(error => dispatch(actAddItemError(error)));
};

// ----------------------------------------------> Delete Contact
const deleteContact = id => dispatch => {
  dispatch(actDeleteItemRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(responce => dispatch(actDeleteItem(id)))
    .catch(error => dispatch(actDeleteItemError(error)));
};

// ----------------------------------------------> Search Contact
const searchContact = name => dispatch => {
  dispatch(actFilterListRequest());
  axios
    .get(`/contacts?q=${name}`)
    .then(responce => dispatch(actFilterList(name)))
    .catch(error => dispatch(actFilterListError(error)));
};

export { addContact, deleteContact, searchContact };
