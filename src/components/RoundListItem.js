'use strict';

import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styles from '../styles/components/list.css';

export default class RoundListItem extends Component {
  render() {
    const orderedAt = moment(this.props.round.orderedAt);
    const wasMoreThan6DaysAgo = moment(new Date()).diff(orderedAt, 'days') > 6;
    const date = wasMoreThan6DaysAgo ? `${orderedAt.format('Do MMMM')} at ${orderedAt.format('h:mm A')}` : orderedAt.calendar();

    return (
      <li className="list__item">
        <Link to={`/rounds/${this.props.round.id}`} className="list__link">
          {date}
        </Link>
      </li>
    );
  }
}