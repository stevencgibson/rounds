'use strict';

import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class RoundListItem extends Component {
  render() {
    const orderedAt = moment(this.props.round.orderedAt);
    const wasMoreThan6DaysAgo = moment(new Date()).diff(orderedAt, 'days') > 6;
    const date = wasMoreThan6DaysAgo ? `${orderedAt.format('Do MMMM')} at ${orderedAt.format('h:mm A')}` : orderedAt.calendar();
    
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
        <Link to={`/rounds/${this.props.round.id}`} style={linkStyle}>
          {date}
        </Link>
      </li>
    );
  }
}