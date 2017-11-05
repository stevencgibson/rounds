'use strict';

import React, { Component } from 'react';
import BarListItem from './BarListItem';

export default class BarList extends Component {
  render() {
    const listStyle = {
      margin: '0',
      padding: '0'
    }
    
    return (
      <ul style={listStyle}>
        {this.props.bars.map((bar) => {
          return <BarListItem key={bar.id} bar={bar} />;
        })}
      </ul>
    );
  }
}