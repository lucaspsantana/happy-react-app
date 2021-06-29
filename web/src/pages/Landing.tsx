import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/landing.css';
import logo from '../images/Logo.svg';
import {FiArrowRight} from 'react-icons/fi'

function Landing(){
    return(
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logo} alt="Happy" />
          <main>
            <h1>Leve a Felicidade para o mundo</h1>
            <p>Visite um orfanato e mude o dia de muitas crianças</p>
          </main>

          <div className="location">
            <strong>Amélia Rodrigues</strong>
            <span>Bahia</span>
            
          </div>
          <Link to="/app" className="enter-app"> 
              <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
           </Link>
        </div>
      </div>
    )
}

export default Landing;