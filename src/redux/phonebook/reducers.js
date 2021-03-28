import { createReducer } from '@reduxjs/toolkit';

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
  actAddItem,
  actAddItemError,
  actAddItemRequest,
  actDeleteItem,
  actDeleteItemError,
  actDeleteItemRequest,
  actFilterList,
  actFilterListError,
  actFilterListRequest,
} from './actions';

// --------------------------------------------------> Loading
const loadingReducer = createReducer(false, {
  [actRegisterRequest]: () => true,
  [actRegister]: () => false,
  [actRegisterError]: () => false,

  [actLoginRequest]: () => true,
  [actLogin]: () => false,
  [actLoginError]: () => false,

  [actLogoutRequest]: () => true,
  [actLogout]: () => false,
  [actLogoutError]: () => false,

  [actGetListRequest]: () => true,
  [actGetList]: () => false,
  [actGetListError]: () => false,

  [actAddItemRequest]: () => true,
  [actAddItem]: () => false,
  [actAddItemError]: () => false,

  [actDeleteItemRequest]: () => true,
  [actDeleteItem]: () => false,
  [actDeleteItemError]: () => false,

  [actFilterListRequest]: () => true,
  [actFilterList]: () => false,
  [actFilterListError]: () => false,
}
)

// --------------------------------------------------> Authorization status
const authorizationReducer = createReducer(false, {
  [actRegister]: () => true,
  [actRegisterError]: () => false,

  [actLogin]: () => true,
  [actLoginError]: () => false,

  [actLogout]: () => false,
  [actLogoutError]: () => true,
}
)

// --------------------------------------------------> User State
const initialUser = {
  name: null,
  email: null
}
const userReducer = createReducer(initialUser, {
  [actRegister]: (state, action) => action.payload.user,

  [actLogin]: (state, action) => action.payload.user,

  [actLogout]: (state, action) => initialUser
}
)

// --------------------------------------------------> User token
const tokenReducer = createReducer(null, {
  [actRegister]: (state, action) => action.payload.token,
  [actLogin]: (state, action) => action.payload.token,
  [actLogout]: (state, action) => null
}
)

// --------------------------------------------------> Collection State

const collectionReducer = createReducer([], {
  [actGetList]: (state, action) => [...state, ...action.payload],
  [actAddItem]: (state, action) => [...state, action.payload],
  [actDeleteItem]: (state, action) => {
    const newStateContacts = state.filter(item => item.id !== action.payload);
    return newStateContacts;
  },
  [actLogout]: (state, action) => [],
}
)

// --------------------------------------------------> Filter State

const filterReducer = createReducer('', {
  [actFilterList]: (state, action) => action.payload
  }
)

export { tokenReducer, userReducer, authorizationReducer, collectionReducer, filterReducer, loadingReducer};
