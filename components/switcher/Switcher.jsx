import React from 'react';
import States from '../states/States';
import Example from '../example/Example';

// A React component which dynamically switches between States & Example
// using a button at the top of the view

class Switcher extends React.Component {
  constructor(props)
  {
    super(props);        
    this.state = {      
      exampleIsActive: true, 
      buttonText: "Switch to States"
    };
  }

  render()
  {
    return (      
      <div>
        <button type="button" onClick={this.handleButtonClick}>
            {this.state.buttonText}
        </button>
        {this.state.exampleIsActive ? <Example/> : <States/>}
      </div>
    );
  }  

  handleButtonClick = () =>
  {
    this.setState({ exampleIsActive: !this.state.exampleIsActive});
    this.setState({buttonText: this.state.exampleIsActive ? "Switch to Example" : "Switch to States"});    
  };
}

export default Switcher;