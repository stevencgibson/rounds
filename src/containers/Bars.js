'use strict';

import React, { Component } from 'react';
import BarList from '../components/BarList';

export default class Bars extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      bars: []
    };
    
    this.getBars = this.getBars.bind(this);
  }
  
  componentDidMount() {
    this.getBars();
  }
  
  getBars() {
    fetch(`http://localhost:3000/bars/`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ bars: res.data });
        // this.setState((prevState, props) => {
        //   return { searchResults: !prevState.searchResults }
        // });
      })
  }
  
  render() {
    return (
      <div>
        <h1 className="h3">Bars</h1>
        <BarList bars={this.state.bars} />
      </div>
    );
  }
}