'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    const stickyNavigation = {
      bottom: '0',
      display: 'flex',
      position: 'absolute',
      width: '100%'
    }
    
    const stickyNavigationItem = {
      backgroundColor: '#fafafa',
      borderLeft: 'solid 1px #eaeaea',
      borderTop: 'solid 1px #eaeaea',
      flexGrow: '1',
      padding: '12px 0',
      textAlign: 'center'
    }
    
    return (
      <nav style={stickyNavigation}>
        <Link to="/" style={stickyNavigationItem}>Search</Link>
        <Link to="/bars" style={stickyNavigationItem}>Bars</Link>
        <Link to="/rounds" style={stickyNavigationItem}>Rounds</Link>
      </nav>
    );
  }
}