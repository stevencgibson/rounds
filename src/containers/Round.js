'use strict';

import React, { Component } from 'react';
import moment from 'moment';
import BarHeading from '../components/BarHeading';
import formatPenceAsPounds from '../utils/formatPenceAsPounds';
import formatOrderDateTime from '../utils/formatOrderDateTime';
import findUniqueProducts from '../utils/findUniqueProducts';

export default class Round extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.match.params.id,
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
    fetch(`http://localhost:3000/rounds/${this.state.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({...res});
      })
  }
  
  render() {
    const products = this.state.products;
    const uniqueProducts = findUniqueProducts(products);
    const totalPriceInPence = products.reduce((sum, product) => sum + product.priceInPence, 0);
    const totalPriceInPounds = formatPenceAsPounds(totalPriceInPence);
    
    /* TODO:
      - find a way to reuse this markup across this container and the Round component
    */
    return (
      <div>
        <h1 className="h5">{formatOrderDateTime(this.state.orderedAt)}</h1>
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
              <td colSpan="2">{totalPriceInPounds}</td>
            </tr>
          </tfoot>
          <tbody>
            {uniqueProducts.map((product) => {
              return <tr key={product.id}>
                <td>{product.name} ({formatPenceAsPounds(product.priceInPence)})</td>
                <td>{products.filter((p) => p.id === product.id).length}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}