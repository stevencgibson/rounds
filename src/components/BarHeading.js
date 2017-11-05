'use strict';

import React, { Component } from 'react';

export default class BarHeading extends Component {
  render() {
    const imageUrl = this.props.bar.imageUrl;
    const hasImage = !!imageUrl;
    
    const imageStyle = {
      marginLeft: '8px',
      width: '40px'
    }
      
    return (
      <span>
        {this.props.bar.name}
        { hasImage &&
          <img src={imageUrl} style={imageStyle} alt="" />
        }
      </span>
    );
  }
}