import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';
import Switcher from './components/switcher/Switcher';

ReactDOM.render(
  <div>
    <Header/>    
    <Switcher/>
  </div>,
  document.getElementById('reactapp'),
);