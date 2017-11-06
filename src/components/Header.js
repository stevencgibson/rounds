'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Link to="/" className="logo">
                <img className="logo__image" src="/images/logo.png" alt="Rounds" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}