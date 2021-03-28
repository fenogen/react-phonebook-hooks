import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// ----------------------> Применяем для (redux-persist) что бы не было ошибки в консоле
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {tokenReducer, userReducer, authorizationReducer,  collectionReducer, filterReducer, loadingReducer } from './reducers';

// -----------------------> Настраиваем (redux-persist):
const persistConfig = {
  key: 'token',
  storage,
  blacklist: ['filterValue', 'contacts', 'loading']   //----> Исключили ненужные ключи
}

// -----------------------> Применяем прослойку для (redux-persist) что бы не было ошибки в консоле
const middlewareNew = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const rootReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isAuthorized: authorizationReducer,
  contacts: collectionReducer,
  filterValue: filterReducer,
  loading: loadingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: middlewareNew,
})

const storeWithPersister = persistStore(store);

export { store, storeWithPersister };

