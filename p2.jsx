import React from 'react';
import ReactDOM from 'react-dom';

import States from './components/states/States';
import Header from './components/header/header';

ReactDOM.render(
  <div>
    <Header/>
    <States/>
  </div>,
  document.getElementById('reactapp'),
);