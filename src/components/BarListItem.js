'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarHeading from './BarHeading';

export default class BarListItem extends Component {
  render() {
    const listItemStyle = {
      borderBottom: 'solid 1px #dadada',
      listStyleType: 'none'
    }
    
    const linkStyle = {
      display: 'block',
      padding: '10px 0'
    }
    
    return (
      <li style={listItemStyle}>
        <Link to={`/bars/${this.props.bar.id}`} style={linkStyle}>
          <BarHeading key={this.props.bar.id} bar={this.props.bar} />
        </Link>
      </li>
    );
  }
}