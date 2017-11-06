'use strict';

import React, { Component } from 'react';
import BarHeading from '../components/BarHeading';
import moment from 'moment';
import formatPenceAsPounds from '../utils/formatPenceAsPounds';
import styles from '../styles/components/products.css';

export default class Bar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: null,
      name: null,
      lat: null,
      lng: null,
      imageUrl: null,
      products: [],
      round: {
        barId: null,
        orderedAt: null,
        products: []
      }
    }
    
    this.getBar = this.getBar.bind(this);
    this.saveRound = this.saveRound.bind(this);
    this.resetRound = this.resetRound.bind(this);
  }
  
  componentDidMount() {
    this.getBar();
  }
  
  getBar() {
    fetch(`http://localhost:3000/bars/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          id: res.id,
          name: res.name,
          lat: null,
          lng: null,
          imageUrl: res.imageUrl,
          products: res.products,
          round: {
            barId: res.id,
            orderedAt: null,
            products: []
          }
        }); // yuck !!!
      })
  }
  
  decreaseQuantity(id) {
    const stateCopy = {...this.state};
    const indexAtWhichProductAdded = stateCopy.round.products.findIndex((product) => product.id === id);
    
    if (indexAtWhichProductAdded > -1) {
      const removed = stateCopy.round.products.splice(indexAtWhichProductAdded, 1); // yuck !!!
      this.setState({
        ...stateCopy
      });
    }
  }
  
  increaseQuantity(id) {
    const stateCopy = {...this.state};
    const product = stateCopy.products.find((product) => product.id === id);
    stateCopy.round.products.push({
      id: product.id,
      priceInPence: product.priceInPence
    }); // yuck !!!
    this.setState({
      ...stateCopy
    });
  }
  
  saveRound() {
    this.state.round.orderedAt = moment().toISOString();
    
    const request = new Request('http://localhost:3000/rounds/', {
    	method: 'POST',
      body: JSON.stringify(this.state.round),
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    fetch(request)
      .then((res) => res.json())
      .then((res) => {
        this.props.history.push(`/rounds/${res.id}`)
      });
  }
  
  resetRound() {
    let stateCopy = {...this.state};
    stateCopy.round.products = [];
    this.setState({
      ...stateCopy
    });
  }
  
  render() {
    const products = this.state.products;
    const addedProducts = this.state.round.products;
    const totalPriceInPence = addedProducts.reduce((sum, product) => sum + product.priceInPence, 0);
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
            {products.map((product) => {
              return <tr key={product.id}>
                <td className="products__cell">{product.name} ({formatPenceAsPounds(product.priceInPence)})</td>
                <td className="products__cell">{addedProducts.filter((p) => p.id === product.id).length}</td>
                <td className="products__cell">
                  <button type="button" className="btn btn-outline-primary products__control" onClick={this.decreaseQuantity.bind(this, product.id)}><span aria-hidden="true">-</span><span className="sr-only">Decrease {product.name}</span></button>
                  <button type="button" className="btn btn-outline-primary products__control" onClick={this.increaseQuantity.bind(this, product.id)}><span aria-hidden="true">+</span><span className="sr-only">Increase {product.name}</span></button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
        {addedProducts.length > 0 &&
          <div>
            <button type="button" className="btn btn-success btn-block" onClick={this.saveRound}>Save Round</button>
            <button type="button" className="btn btn-outline-secondary btn-block" onClick={this.resetRound}>Reset</button>
          </div>
        }
      </div>
    );
  }
}