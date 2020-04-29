import React from 'react';
import './LandingPage.scss';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return<div className="landing-page"> 
          <Link to='/office'><button className="demo-button button1">DEMO</button></Link>
        </div>
}

export default LandingPage;