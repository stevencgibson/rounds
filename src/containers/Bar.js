'use strict';

import React, { Component } from 'react';
import BarHeading from '../components/BarHeading';
import moment from 'moment';
import formatPenceAsPounds from '../utils/formatPenceAsPounds';

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
          products: res.products
        });
        // this.setState((prevState, props) => {
        //   return { searchResults: !prevState.searchResults }
        // });
      })
  }
  
  // yuck doesn't work !!!
  decreaseQuantity(id) {
    const stateCopy = {...this.state};
    const index = stateCopy.round.products.findIndex((product) => product.id === id);
    
    if (index > -1) {
      const removed = stateCopy.round.products.splice(index, 1);
      this.setState({
        ...stateCopy
      });
    }
  }
  
  // yuck !!!
  increaseQuantity(id) {
    const stateCopy = {...this.state};
    stateCopy.round.products.push(stateCopy.products.find((product) => product.id === id));
    // why does this work if we're using const?
    this.setState({
      ...stateCopy
    });
  }
  
  saveRound() {
    this.state.round.orderedAt = moment().toISOString();
    
    let request = new Request('http://localhost:3000/rounds/', {
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
    const listStyle = {
      margin: '0',
      padding: '0'
    }
    
    const listItemStyle = {
      borderBottom: 'solid 1px #dadada',
      listStyleType: 'none',
      padding: '10px 0'
    }
    
    const buttonReset = {
      background: 'none',
      border: 'solid 1px blue',
      borderRadius: '50px',
      color: 'blue',
      height: '44px',
      padding: 0,
      width: '44px'
    }

    return (
      <div>
        <h1 className="h3"><BarHeading bar={this.state} /></h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"><span className="sr-only">Product</span></th>
              <th scope="col"><span className="sr-only">Price</span></th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th scope="row" colspan="2">Round Total</th>
              <td>{formatPenceAsPounds(this.state.round.products.reduce((sum, product) => sum + product.priceInPence, 0))}</td>
            </tr>
          </tfoot>
          <tbody>
            {this.state.products.map((product) => {
              return <tr key={product.id} style={listItemStyle}>
                <td>{product.name}</td>
                <td>{formatPenceAsPounds(product.priceInPence)}</td>
                <td>
                  {this.state.round.products.filter((p) => p.id === product.id).length}
                  {this.state.round.products.filter((p) => p.id === product.id).length > 0 && <button type="button" style={buttonReset} onClick={this.decreaseQuantity.bind(this, product.id)}><span aria-hidden="true">-</span><span className="sr-only">Decrease {product.name}</span></button>}
                  <button type="button" style={buttonReset} onClick={this.increaseQuantity.bind(this, product.id)}><span aria-hidden="true">+</span><span className="sr-only">Increase {product.name}</span></button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
        {this.state.round.products.length > 0 &&
          <div>
            <button type="button" className="btn btn-success btn-block" onClick={this.saveRound}>Save Round</button>
            <button type="button" className="btn btn-secondary btn-block" onClick={this.resetRound}>Reset</button>
          </div>
        }
      </div>
    );
  }
}