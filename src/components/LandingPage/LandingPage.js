import React from 'react';
import './LandingPage.scss';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/images/landing-page-background.png';

const LandingPage = () => {
  return<div className="landing-page"> 
           <img className="myImg" src={backgroundImage} alt="" />
          <Link to='/office'><button className="demo-button button1">DEMO</button></Link>
          <Link to='/office'><button className="demo-button button2">DEMO</button></Link>
          <Link to='/office'><button className="demo-button button3">DEMO</button></Link>
          <Link to='/office'><button className="demo-button button4">DEMO</button></Link>
        </div>
}

export default LandingPage;