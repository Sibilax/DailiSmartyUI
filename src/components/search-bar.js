import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log('trying to handle subimit for query', query);
    }

    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />;
    }


    render() {
        
        const { handleSubmit } = this.props

        return (
        <form className='Search-bar' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

            <Field name="query" component={this.renderInput} />
        </form>
        );
    }
    
}


export default reduxForm({
  form: 'searchBar'
})(SearchBar);