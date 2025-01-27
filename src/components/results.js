import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import SearchBar from './searchBar';
import ResultsPosts from './resultsPosts';


class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fecthPostsWithQuery(query);
    }
    
    render() {
        return (
            <div>
            
            <Logo size={55}/>
            <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
            <ResultsPosts/>
                
            </div>
        );
    }
}

export default connect(null, actions)(Results);
