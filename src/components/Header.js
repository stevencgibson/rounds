'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const logoLinkStyle = {
      display: 'block',
      padding: '20px',
      textAlign: 'center'
    }
    
    const logoImageStyle = {
      display: 'block',
      margin: '0 auto'
    }
    
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Link to="/" style={logoLinkStyle}>
                <img style={logoImageStyle} className="logo" src="/images/logo.png" alt="Rounds" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}