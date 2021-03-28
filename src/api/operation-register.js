import axios from 'axios';

import {
  actRegister,
  actRegisterError,
  actRegisterRequest,
  actLogin,
  actLoginError,
  actLoginRequest,
  actLogout,
  actLogoutError,
  actLogoutRequest,
  actGetList,
  actGetListError,
  actGetListRequest,
} from './../redux/phonebook/actions';

// --------------------------------------------------> Настройки axios
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// --------------------------------------------------> REGISTER
const registerUser = newUser => dispatch => {
  dispatch(actRegisterRequest());
  axios
    .post('/users/signup', newUser)
    .then(responce => dispatch(actRegister(responce.data)))
    .catch(error => {
      alert("Such user already exists or email is incorrectly entered")
      return dispatch(actRegisterError(error));
    }
    )
};

// --------------------------------------------------> LOGIN
const loginUser = user => dispatch => {
  dispatch(actLoginRequest());
  axios
    .post('/users/login', user)
    .then(responce => dispatch(actLogin(responce.data)))
    .catch(error => {
      alert("You entered your email or password incorrectly, please check")
      return dispatch(actLoginError(error));
    }
    )
};

// -------------------------------------------------> LOGOUT

const logout = () => dispatch => {
  dispatch(actLogoutRequest());
  axios
    .post('/users/logout')
    .then(responce => {
      token.unset();
      return dispatch(actLogout());
    })
    .catch(error => dispatch(actLogoutError(error)));
};

// -----------------------------------------------> All Contacts

const getAllContacts = () => (dispatch, getState) => {
  // const { token: persistedReducer } = getState();
  const savedToken = getState().token;

  // ---> Проверили есть ли токен в localstorage
  if (!savedToken) {
    return;
  }
  token.set(savedToken);

  dispatch(actGetListRequest());
  axios
    .get('/contacts')
    .then(responce => dispatch(actGetList(responce.data)))
    .catch(error => dispatch(actGetListError(error)));
};


export { getAllContacts, logout, registerUser, loginUser };
