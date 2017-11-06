'use strict';

import React, { Component } from 'react';
import styles from '../styles/components/bar-logo.css';

export default class BarHeading extends Component {
  render() {
    const imageUrl = this.props.bar.imageUrl;
    const hasImage = !!imageUrl;
      
    return (
      <span>
        {this.props.bar.name}
        { hasImage &&
          <img src={imageUrl} className="bar-logo" alt="" />
        }
      </span>
    );
  }
}