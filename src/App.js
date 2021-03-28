import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import route from './routes/routes';
import PrivateRoute from './routes/PrivateRoute';
import PublickRoute from './routes/PublickRoute';

import { getAllContacts } from './api/operation-register';
import { selAuthorization } from './redux/phonebook/selectors';

import AppBar from './components/AppBar/AppBar';

import './App.css';

const HomePage = lazy(() =>
  import('./pages/Home/HomePage.js' /*webpackChunkName: "HomePage"*/),
);
const LoginPage = lazy(() =>
  import('./pages/Login/LoginPage' /*webpackChunkName: "LoginPage"*/),
);
const RegisterPage = lazy(() =>
  import('./pages/Register/RegisterPage' /*webpackChunkName: "RegisterPage"*/),
);
const ContactsPage = lazy(() =>
  import('./pages/Contacts/ContactsPage' /*webpackChunkName: "ContactsPage"*/),
);

export default function App() {
  const isAuthorized = useSelector(selAuthorization);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthorized) {
      dispatch(getAllContacts());
    }
  });
  return (
    <div className="App">
      <Suspense
        fallback={
          <h3 style={{ marginTop: 200, color: '#ff6b6b' }}>Loading...</h3>
        }
      >
        <AppBar />
        <Switch>
          <PublickRoute
            exact
            path={route.home}
            redirectTo={route.contacts}
            restricted
          >
            <HomePage />
          </PublickRoute>
          <PublickRoute
            path={route.register}
            redirectTo={route.contacts}
            restricted
          >
            <RegisterPage />
          </PublickRoute>
          <PublickRoute
            path={route.login}
            redirectTo={route.contacts}
            restricted
          >
            <LoginPage />
          </PublickRoute>
          <PrivateRoute path={route.contacts} redirectTo={route.home}>
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
}
