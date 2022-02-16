import React from 'react';
import './header.css';

class Header extends React.Component {
  constructor(props)
  {
    super(props);  
  }

  render()
  {
    return (
      <div className="cs142-header">
        <p>NFTs are fake, don&apos;t buy them... </p>
        <img className="cs142-header-image" src="./components/header/BAYC.png"></img>        
        <p>... trust me, I&apos;m an ape... </p>        
      </div>
    );
  }
}

export default Header;