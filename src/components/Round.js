'use strict';

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import moment from 'moment';
import formatPenceAsPounds from '../utils/formatPenceAsPounds';
import styles from '../styles/components/products.css';

export default class Round extends Component {
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
      id: null,
      barId: this.props.barId,
      orderedAt: null,
      products: []
    }
    
    this.saveRound = this.saveRound.bind(this);
    this.resetRound = this.resetRound.bind(this);
  }
  
  decreaseQuantity(id) {
    let stateCopy = {...this.state};
    const indexAtWhichProductAdded = stateCopy.products.findIndex((product) => product.id === id);
    
    if (indexAtWhichProductAdded > -1) {
      const removed = stateCopy.products.splice(indexAtWhichProductAdded, 1); // yuck !!!
      this.setState({
        ...stateCopy
      });
    }
  }
  
  increaseQuantity(id) {
    let stateCopy = {...this.state};
    const product = this.props.products.find((product) => product.id === id);
    stateCopy.products.push({
      id: product.id,
      priceInPence: product.priceInPence
    }); // yuck !!!
    this.setState({
      ...stateCopy
    });
  }
  
  saveRound() {
    let stateCopy = {...this.state};
    stateCopy.orderedAt = moment().toISOString();
    this.setState({ ...stateCopy }, () => {
      const request = new Request('http://localhost:3000/rounds/', {
      	method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      fetch(request)
        .then((res) => res.json())
        .then((res) => {
          this.props.history.push(`/rounds/${res.id}`)
        });
    });
  }
  
  resetRound() {
    let stateCopy = {...this.state};
    stateCopy.products = [];
    this.setState({ ...stateCopy });
  }
  
  render() {
    const products = this.props.products;
    const addedProducts = this.state.products;
    const totalPriceInPence = addedProducts.reduce((sum, product) => sum + product.priceInPence, 0);
    const totalPriceInPounds = formatPenceAsPounds(totalPriceInPence);
    const isRoundEmpty = addedProducts.length === 0;
    
    return (
      <div>
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
            {products.map((product) => {
              return <tr key={product.id}>
                <td className="products__cell">{product.name} ({formatPenceAsPounds(product.priceInPence)})</td>
                <td className="products__cell">{addedProducts.filter((p) => p.id === product.id).length}</td>{/* TODO: find a better way to calculate quantity */}
                <td className="products__cell">
                  <button type="button" className="btn btn-outline-primary products__control" onClick={this.decreaseQuantity.bind(this, product.id)}><span aria-hidden="true">-</span><span className="sr-only">Decrease {product.name}</span></button>
                  <button type="button" className="btn btn-outline-primary products__control" onClick={this.increaseQuantity.bind(this, product.id)}><span aria-hidden="true">+</span><span className="sr-only">Increase {product.name}</span></button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
        {!isRoundEmpty &&
          <div>
            <button type="button" className="btn btn-success btn-block" onClick={this.saveRound}>Save Round</button>
            <button type="button" className="btn btn-outline-secondary btn-block" onClick={this.resetRound}>Reset</button>
          </div>
        }
      </div>
    );
  }
}