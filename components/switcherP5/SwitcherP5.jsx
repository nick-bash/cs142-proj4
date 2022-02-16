import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import States from '../states/States';
import Example from '../example/Example';
import './SwitcherP5.css';

// A React component which dynamically switches between States & Example
// using React Router's HashRouter's

class SwitcherP5 extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (            
      <HashRouter>
        <div className='cs142-switcherp5-toolbar'>
          <text>Navigate to: </text>
          <Link className='.cs142-switcherp5-links' to="/example">Example</Link>        
          <text> </text>
          <Link className='.cs142-switcherp5-links' to="/states">States</Link>
        </div>
        <Route path="/states" component={States}/>
        <Route path="/example" component={Example}/>                  
      </HashRouter>
    );
  }  

}

export default SwitcherP5;