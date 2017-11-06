'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarHeading from './BarHeading';
import styles from '../styles/components/list.css';

export default class BarListItem extends Component {
  render() {
    return (
      <li className="list__item">
        <Link to={`/bars/${this.props.bar.id}`} className="list__link">
          <BarHeading key={this.props.bar.id} bar={this.props.bar} />
        </Link>
      </li>
    );
  }
}