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
    fetch(`http://localhost:3000/bars/?sortBy=name&direction=ascending`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ bars: res.data });
      })
  }
  
  render() {
    return (
      <div>
        <h1 className="h5">Bars</h1>
        <BarList bars={this.state.bars} />
      </div>
    );
  }
}