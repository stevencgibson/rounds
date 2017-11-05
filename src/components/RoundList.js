'use strict';

import React, { Component } from 'react';
import RoundListItem from './RoundListItem';
import sortRoundsByDateTimeDescending from '../utils/sortRoundsByDateTimeDescending';

export default class RoundList extends Component {
  render() {
    const listStyle = {
      margin: '0',
      padding: '0'
    }
    
    return (
      <ul style={listStyle}>
        {this.props.rounds.sort(sortRoundsByDateTimeDescending).map((round) => {
          return <RoundListItem key={round.id} round={round} />;
        })}
      </ul>
    );
  }
}