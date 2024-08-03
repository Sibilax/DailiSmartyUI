import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';


class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fecthPostsWithQuery(query); //con esto debrriamos acceder a la búsqueda
    this.props.history.push('/results');
  }

  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}
