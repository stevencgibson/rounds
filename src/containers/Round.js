'use strict';

import React, { Component } from 'react';
import moment from 'moment';
import BarHeading from '../components/BarHeading';
import formatPenceAsPounds from '../utils/formatPenceAsPounds';

export default class Round extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: null,
      barId: null,
      orderedAt: null,
      products: []
    };
    
    this.getRound = this.getRound.bind(this);
  }
  
  componentDidMount() {
    this.getRound();
  }
  
  getRound() {
    fetch(`http://localhost:3000/rounds/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({...res});
      })
  }
  
  render() {
    const totalPriceInPence = this.state.products.reduce((sum, product) => sum + product.priceInPence, 0);
    const totalPriceInPounds = formatPenceAsPounds(totalPriceInPence);

    return (
      <div>
        <h1 className="h5"><BarHeading bar={this.state} /></h1>
        <table className="products">
          <thead>
            <tr>
              <th scope="col" className="sr-only">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col" className="sr-only">Action</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th scope="row">Round Total</th>
              <td>{totalPriceInPounds}</td>
            </tr>
          </tfoot>
          <tbody>
            {this.state.products.map((product) => {
              return <tr key={product.id}>
                <td>{product.id} ({formatPenceAsPounds(product.priceInPence)})</td>
                <td></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}