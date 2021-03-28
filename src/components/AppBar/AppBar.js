import React from 'react';
import Navigation from './Navigation/Navigation';

import style from './AppBar.module.css'


function AppBar(props) {
  return (
    <header className={style.list}>
      <Navigation />
    </header>
  );
}

export default AppBar;
