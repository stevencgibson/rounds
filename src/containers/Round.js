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
        this.setState(res);
        // this.setState((prevState, props) => {
        //   return { searchResults: !prevState.searchResults }
        // });
      })
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
    
    const roundTotalPriceInPence = this.state.products.reduce((sum, product) => sum + product.priceInPence, 0);
    const roundTotalPriceInPounds = formatPenceAsPounds(roundTotalPriceInPence);
    
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
              <td>{roundTotalPriceInPounds}</td>
            </tr>
          </tfoot>
          <tbody>
            {this.state.products.map((product) => {
              return <tr key={product.id} style={listItemStyle}>
                <td>{product.id}</td>
                <td>{formatPenceAsPounds(product.priceInPence)}</td>
                <td>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}