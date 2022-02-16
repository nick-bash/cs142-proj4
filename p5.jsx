import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';
import SwitcherP5 from './components/switcherP5/SwitcherP5';

ReactDOM.render(
  <div>
    <Header/>    
    <SwitcherP5/>
  </div>,
  document.getElementById('reactapp'),
);