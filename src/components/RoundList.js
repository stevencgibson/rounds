'use strict';

import React, { Component } from 'react';
import RoundListItem from './RoundListItem';
import styles from '../styles/components/list.css';

export default class RoundList extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.rounds.map((round) => {
          return <RoundListItem key={round.id} round={round} />;
        })}
      </ul>
    );
  }
}