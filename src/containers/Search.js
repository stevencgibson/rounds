'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarList from '../components/BarList';

export default class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: null,
      searchResults: []
    };
    
    this.searchBars = this.searchBars.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleKeyPress(e) {
    const searchTerm = e.target.value;
    
    if (!searchTerm) {
      this.setState({
        searchTerm: null,
        searchResults: []
      });
      // this.setState((prevState, props) => {
      //   return { searchResults: !prevState.searchResults }
      // });
      return;
    }
      
    // setSearchResults()
    this.searchBars(e.target.value);
  }
  
  searchBars(searchTerm) {
    fetch(`http://localhost:3000/bars/?searchTerm=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          searchTerm: searchTerm,
          searchResults: res.data
        });
        // this.setState((prevState, props) => {
        //   return { searchResults: !prevState.searchResults }
        // });
      })
  }
  
  render() {
    const isSearchTerm = !!this.state.searchTerm;
    const searchResultsCount = this.state.searchResults.length;
    const resultsCountMessage = isSearchTerm ? searchResultsCount === 1 ? `1 result was found.` : `${searchResultsCount} results were found.` : ''; 
    
    return (
      <div>
        <h1 className="h3">Search</h1>
        <form>
          <div className="form-group">
            <label htmlFor="search" className="sr-only">Bar</label>
            <input id="search" name="search" type="text" placeholder="Search for a bar" autoComplete="off" onKeyUp={this.handleKeyPress} className="form-control" />
            <span role="alert">{resultsCountMessage}</span>
          </div>
        </form>
        <BarList bars={this.state.searchResults} />
      </div>
    );
  }
}