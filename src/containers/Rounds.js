'use strict';

import React, { Component } from 'react';
import RoundList from '../components/RoundList';

export default class Rounds extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      rounds: []
    };
    
    this.getRounds = this.getRounds.bind(this);
  }
  
  componentDidMount() {
    this.getRounds();
  }
  
  getRounds() {
    fetch(`http://localhost:3000/rounds/?sortBy=datetime&direction=descending`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ rounds: res.data  });
      })
  }
  
  render() {
    return (
      <div>
        <h1 className="h5">Rounds</h1>
        <RoundList rounds={this.state.rounds} />
      </div>
    );
  }
}