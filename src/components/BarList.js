'use strict';

import React, { Component } from 'react';
import BarListItem from './BarListItem';
import styles from '../styles/components/list.css';

export default class BarList extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.bars.map((bar) => {
          return <BarListItem key={bar.id} bar={bar} />;
        })}
      </ul>
    );
  }
}