'use strict';

import React, { Component } from 'react';
import BarHeading from '../components/BarHeading';
import Round from '../components/Round';
import formatPenceAsPounds from '../utils/formatPenceAsPounds';

export default class Bar extends Component {
  constructor(props) {
    super(props);
    
    /* TODO:
      - seeding state from props seems to be an anti-pattern
      - as changes to props don't reflect on the state
      - the lifecycle of this component is short
      - so the props aren't likely to change
      - but there must be a better way to set the id
    */
    this.state = {
      id: this.props.match.params.id,
      name: null,
      lat: null,
      lng: null,
      imageUrl: null,
      products: []
    }
    
    this.getBar = this.getBar.bind(this);
  }
  
  componentDidMount() {
    this.getBar();
  }
  
  getBar() {
    fetch(`http://localhost:3000/bars/${this.state.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ ...res });
      })
  }
  
  render() {
    return (
      <div>
        <h1 className="h5"><BarHeading bar={this.state} /></h1>
        <Round barId={this.state.id} products={this.state.products} history={this.props.history}/>
      </div>
    );
  }
}