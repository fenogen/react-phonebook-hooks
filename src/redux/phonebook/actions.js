import { createAction } from '@reduxjs/toolkit';


// ------------------------------------------------------> REGISTER User

const actRegister = createAction('phonebook/Register/SUCCSESS');
const actRegisterError = createAction('phonebook/Register/ERROR');
const actRegisterRequest = createAction('phonebook/Register/REQUEST');

// ------------------------------------------------------> LOGIN User

const actLogin = createAction('phonebook/Login/SUCCSESS');
const actLoginError = createAction('phonebook/Login/ERROR');
const actLoginRequest = createAction('phonebook/Login/REQUEST');

// ------------------------------------------------------> LOGOUT User

const actLogout = createAction('phonebook/Logout/SUCCSESS');
const actLogoutError = createAction('phonebook/Logout/ERROR');
const actLogoutRequest = createAction('phonebook/Logout/REQUEST');

// ------------------------------------------------------> Info of Current User

const actCurrentUser = createAction('phonebook/CurrentUser/SUCCSESS');
const actCurrentUserError = createAction('phonebook/CurrentUser/ERROR');
const actCurrentUserRequest = createAction('phonebook/CurrentUser/REQUEST');

// ------------------------------------------------------> GET Collection State

const actGetList = createAction('phonebook/list_get/SUCCSESS');
const actGetListError = createAction('phonebook/list_get/ERROR');
const actGetListRequest = createAction('phonebook/list_get/REQUEST');

// ------------------------------------------------------> Add Collection State

const actAddItem = createAction('phonebook/item_create/SUCCSESS');
const actAddItemError = createAction('phonebook/item_create/ERROR');
const actAddItemRequest = createAction('phonebook/item_create/REQUEST');

// ------------------------------------------------------> Delete Collection State

const actDeleteItem = createAction('phonebook/item_delete/SUCCSESS');
const actDeleteItemError = createAction('phonebook/item_delete/ERROR');
const actDeleteItemRequest = createAction('phonebook/item_delete/REQUEST');

// ------------------------------------------------------> Filter Collection State

const actFilterList = createAction('phonebook/filter/SUCCSESS');
const actFilterListError = createAction('phonebook/filter/ERROR');
const actFilterListRequest = createAction('phonebook/filter/REQUEST');

export {
  actRegister,
  actRegisterError,
  actRegisterRequest,
  actLogin,
  actLoginError,
  actLoginRequest,
  actLogout,
  actLogoutError,
  actLogoutRequest,
  actCurrentUser,
  actCurrentUserError,
  actCurrentUserRequest,
  actGetList,
  actGetListError,
  actGetListRequest,
  actAddItem,
  actAddItemError,
  actAddItemRequest,
  actDeleteItem,
  actDeleteItemError,
  actDeleteItemRequest,
  actFilterList,
  actFilterListError,
  actFilterListRequest,
};
