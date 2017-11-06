'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formatOrderDateTime from '../utils/formatOrderDateTime';
import styles from '../styles/components/list.css';

export default class RoundListItem extends Component {
  render() {
    return (
      <li className="list__item">
        <Link to={`/rounds/${this.props.round.id}`} className="list__link">
          {formatOrderDateTime(this.props.round.orderedAt)}
        </Link>
      </li>
    );
  }
}