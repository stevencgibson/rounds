'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/nav.css';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="nav__link">Search</Link>
        <Link to="/bars" className="nav__link">Bars</Link>
        <Link to="/rounds" className="nav__link">Rounds</Link>
      </nav>
    );
  }
}