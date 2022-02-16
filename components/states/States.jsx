import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props)
  {
    super(props);    
    this.state = { filter: "" };
  }

  render()
  {
    return (
      <div>        
        <label htmlFor="inId">Filter to only show states that contain:</label>
        <input id="inId" type="text" value={this.state.filter} onChange={(e) => this.setState({ filter: e.target.value })} />
        <p>States:</p>
        <ul>
          {this.loadStates()}      
        </ul>
      </div>
    );
  }

  loadStates()
  {
    var states = window.cs142models.statesModel();
 
    var statesToReturn = [];
    var re = new RegExp(this.state.filter, "i");
    for (var i = 0; i < states.length; i++)
    {
      //If no filter, return all states
      if(this.state.filter === "")
      {
        statesToReturn.push(<li key={i} className="cs142-states-state-name"> {states[i]} </li>);
      }
      else if (states[i].match(re))
      {    
        statesToReturn.push(<li key={i} className="cs142-states-state-name"> {states[i]} </li>);        
      }
    }

    // If no matching states, show a message
    if(statesToReturn.length === 0) statesToReturn = <li className="cs142-states-state-name">No states match this filter.</li>;

    return statesToReturn;
  }
}

export default States;
